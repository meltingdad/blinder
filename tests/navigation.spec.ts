import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display header with logo", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Logo should be clickable and link to home
    const logo = header.getByRole("link").first();
    await expect(logo).toHaveAttribute("href", "/");
  });

  test("should have main navigation links", async ({ page }) => {
    const nav = page.locator("header nav, header");

    // Check for key navigation items
    const homeLink = nav.getByRole("link", { name: /Home/i });
    const aboutLink = nav.getByRole("link", { name: /Über uns/i });
    const servicesLink = nav.getByRole("link", { name: /Angebote/i });
    const contactLink = nav.getByRole("link", { name: /Kontakt/i });

    await expect(homeLink.first()).toBeVisible();
    await expect(aboutLink.first()).toBeVisible();
    await expect(servicesLink.first()).toBeVisible();
    await expect(contactLink.first()).toBeVisible();
  });

  test("home link should navigate to homepage", async ({ page }) => {
    await page.goto("/kontakt");
    const homeLink = page.locator("header").getByRole("link", { name: /Home/i }).first();
    await homeLink.click();
    await expect(page).toHaveURL("/");
  });

  test("contact link should navigate to contact page", async ({ page }) => {
    const contactLink = page.locator("header").getByRole("link", { name: /Kontakt/i }).first();
    await contactLink.click();
    await expect(page).toHaveURL("/kontakt");
  });

  test("footer should be visible", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("footer should have company information", async ({ page }) => {
    const footer = page.locator("footer");

    // Check for contact info (phone link)
    const phoneLink = footer.locator('a[href^="tel:"]');
    await expect(phoneLink.first()).toBeVisible();

    // Check for email link
    const emailLink = footer.locator('a[href^="mailto:"]');
    await expect(emailLink.first()).toBeVisible();
  });

  test("footer legal links should work", async ({ page }) => {
    const footer = page.locator("footer");

    // Check for Impressum
    const impressumLink = footer.getByRole("link", { name: /Impressum/i });
    await expect(impressumLink).toBeVisible();

    // Check for Datenschutz
    const datenschutzLink = footer.getByRole("link", { name: /Datenschutz/i });
    await expect(datenschutzLink).toBeVisible();
  });

  test("skip to content link should exist for accessibility", async ({ page }) => {
    // Tab to reveal the skip link
    await page.keyboard.press("Tab");

    const skipLink = page.getByRole("link", { name: /Zum Hauptinhalt/i });
    await expect(skipLink).toBeFocused();
  });
});

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("should show mobile menu button", async ({ page }) => {
    await page.goto("/");

    // Mobile menu toggle should be visible
    const menuButton = page.getByRole("button", { name: /menu|menü|navigation/i });
    await expect(menuButton).toBeVisible();
  });

  test("mobile menu should open and close", async ({ page }) => {
    await page.goto("/");

    // Find and click mobile menu button
    const menuButton = page.getByRole("button", { name: /menü öffnen/i });
    await menuButton.click();

    // Wait for animation
    await page.waitForTimeout(300);

    // The menu should be visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // Click the close button inside the mobile menu
    const closeButton = page.locator('#mobile-menu button[aria-label*="schliessen"]');
    await closeButton.click({ force: true });

    // Wait for close animation
    await page.waitForTimeout(300);
  });
});
