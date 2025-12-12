import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/Swiss Quality Storen/);
  });

  test("should display hero section", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toBeVisible();
  });

  test("should have main heading", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(/Storen|Sonnenschutz/);
  });

  test("should display services section", async ({ page }) => {
    // The services section has heading "Unsere Angebote"
    const servicesHeading = page.locator('h2:has-text("Unsere Angebote")');
    await expect(servicesHeading).toBeVisible();
  });

  test("should display regions section", async ({ page }) => {
    const regionsHeading = page.getByRole("heading", { name: /Wir sind für Sie da/i });
    await expect(regionsHeading).toBeVisible();
  });

  test("should display testimonials section", async ({ page }) => {
    // Look for testimonials section by heading or badge
    const testimonialsHeading = page.locator('h2:has-text("Das sagen unsere Kunden")');
    await expect(testimonialsHeading).toBeVisible();
  });

  test("should display partners section", async ({ page }) => {
    // Partners section has heading "Wir arbeiten mit den besten Marken" or badge "Unsere Partner"
    const partnersSection = page.locator('text=Unsere Partner');
    await expect(partnersSection).toBeVisible();
  });

  test("CTA buttons should be clickable", async ({ page }) => {
    // Test primary CTA
    const ctaButton = page.getByRole("link", { name: /Offerte|Kontakt/i }).first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href");
  });

  test("should have JSON-LD structured data", async ({ page }) => {
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd.first()).toBeAttached();
  });

  test("should not have any console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Filter out known acceptable errors (like favicon 404 in dev)
    const criticalErrors = errors.filter(
      (err) => !err.includes("favicon") && !err.includes("manifest")
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
