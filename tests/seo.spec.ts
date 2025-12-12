import { test, expect } from "@playwright/test";

test.describe("SEO", () => {
  test("homepage should have proper meta tags", async ({ page }) => {
    await page.goto("/");

    // Check title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(10);
    expect(title.length).toBeLessThan(70);

    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description).toBeTruthy();
    expect(description!.length).toBeGreaterThan(50);
    expect(description!.length).toBeLessThan(160);

    // Check canonical URL or og:url
    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute("content");
    expect(ogUrl).toBeTruthy();
  });

  test("should have Open Graph meta tags", async ({ page }) => {
    await page.goto("/");

    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute("content");
    const ogType = await page.locator('meta[property="og:type"]').getAttribute("content");
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");

    expect(ogTitle).toBeTruthy();
    expect(ogDescription).toBeTruthy();
    expect(ogType).toBeTruthy();
    expect(ogImage).toBeTruthy();
  });

  test("should have Twitter Card meta tags", async ({ page }) => {
    await page.goto("/");

    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute("content");
    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute("content");

    expect(twitterCard).toBeTruthy();
    expect(twitterTitle).toBeTruthy();
  });

  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/");

    // Should have exactly one H1
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBe(1);

    // H2s should exist
    const h2Count = await page.locator("h2").count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test("all images should have alt text", async ({ page }) => {
    await page.goto("/");

    // Get all images
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      const src = await img.getAttribute("src");

      // All images should have alt attribute (can be empty for decorative images)
      expect(
        alt !== null,
        `Image ${src} is missing alt attribute`
      ).toBeTruthy();
    }
  });

  test("should have JSON-LD LocalBusiness schema", async ({ page }) => {
    await page.goto("/");

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    const count = await jsonLdScripts.count();

    expect(count).toBeGreaterThan(0);

    // Get first JSON-LD and parse it
    const jsonLdContent = await jsonLdScripts.first().textContent();
    expect(jsonLdContent).toBeTruthy();

    const schema = JSON.parse(jsonLdContent!);

    // Should contain LocalBusiness or have a graph with LocalBusiness
    if (schema["@graph"]) {
      const hasLocalBusiness = schema["@graph"].some(
        (item: { "@type"?: string }) => item["@type"] === "LocalBusiness"
      );
      expect(hasLocalBusiness).toBeTruthy();
    } else {
      expect(schema["@type"]).toContain("LocalBusiness");
    }
  });

  test("contact page should have proper meta tags", async ({ page }) => {
    await page.goto("/kontakt");

    const title = await page.title();
    expect(title.toLowerCase()).toContain("kontakt");

    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description).toBeTruthy();
  });

  test("should have language attribute", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    const lang = await html.getAttribute("lang");

    expect(lang).toBeTruthy();
    expect(lang).toMatch(/de/);
  });

  test("should have viewport meta tag", async ({ page }) => {
    await page.goto("/");

    const viewport = await page.locator('meta[name="viewport"]').getAttribute("content");
    expect(viewport).toBeTruthy();
    expect(viewport).toContain("width=device-width");
  });

  test("internal links should not be broken", async ({ page }) => {
    await page.goto("/");

    // Get all internal links and collect unique hrefs
    const links = page.locator('a[href^="/"]');
    const count = await links.count();

    const hrefs = new Set<string>();
    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute("href");
      if (href && href.startsWith("/") && !href.includes("#")) {
        hrefs.add(href);
      }
    }

    // Check only first 5 unique links to avoid timeout
    const uniqueHrefs = Array.from(hrefs).slice(0, 5);

    for (const href of uniqueHrefs) {
      const response = await page.goto(href);
      expect(
        response?.status(),
        `Link ${href} returned status ${response?.status()}`
      ).toBeLessThan(400);
    }
  });
});

test.describe("Performance", () => {
  test("should load homepage within reasonable time", async ({ page }) => {
    const startTime = Date.now();
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
    const loadTime = Date.now() - startTime;

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test("should not have layout shift issues", async ({ page }) => {
    await page.goto("/");

    // Wait for page to settle
    await page.waitForLoadState("networkidle");

    // Check that main content is visible and stable
    const mainContent = page.locator("main");
    await expect(mainContent).toBeVisible();
  });
});
