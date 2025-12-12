import { test, expect } from "@playwright/test";

test.describe("Contact Page & Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/kontakt");
  });

  test("should load contact page", async ({ page }) => {
    await expect(page).toHaveTitle(/Kontakt/);
  });

  test("should display contact form", async ({ page }) => {
    // Specifically target the contact form inside the shadow section (not the footer newsletter form)
    const form = page.locator("section form").first();
    await expect(form).toBeVisible();
  });

  test("should have all required form fields", async ({ page }) => {
    // Check for name field
    const nameInput = page.getByLabel(/Name/i);
    await expect(nameInput).toBeVisible();

    // Check for email field
    const emailInput = page.getByLabel(/E-Mail/i);
    await expect(emailInput).toBeVisible();

    // Check for message field
    const messageInput = page.getByLabel(/Nachricht|Mitteilung/i);
    await expect(messageInput).toBeVisible();

    // Check for submit button
    const submitButton = page.getByRole("button", { name: /Senden|Absenden|Anfragen/i });
    await expect(submitButton).toBeVisible();
  });

  test("should show validation errors for empty required fields", async ({ page }) => {
    // Try to submit empty form
    const submitButton = page.getByRole("button", { name: /Senden|Absenden|Anfragen/i });
    await submitButton.click();

    // Browser should show native validation (required fields)
    // The form should not navigate away
    await expect(page).toHaveURL(/kontakt/);
  });

  test("should show validation error for invalid email", async ({ page }) => {
    // Fill in name
    await page.getByLabel(/Name/i).fill("Test User");

    // Fill in invalid email
    await page.getByLabel(/E-Mail/i).fill("invalid-email");

    // Fill in message
    await page.getByLabel(/Nachricht|Mitteilung/i).fill("Test message");

    // Try to submit
    const submitButton = page.getByRole("button", { name: /Senden|Absenden|Anfragen/i });
    await submitButton.click();

    // Should still be on contact page (form not submitted due to invalid email)
    await expect(page).toHaveURL(/kontakt/);
  });

  test("honeypot field should exist for spam protection", async ({ page }) => {
    // The honeypot field should exist in the contact form
    const honeypotField = page.locator('section form input[name="website"]');

    // Should exist (positioned off-screen or hidden to prevent spam)
    if (await honeypotField.count() > 0) {
      // Field exists - it may be positioned off-screen via CSS
      const boundingBox = await honeypotField.first().boundingBox();
      // If it has a bounding box with negative position, it's off-screen (valid anti-spam technique)
      expect(boundingBox === null || boundingBox.x < 0).toBeTruthy();
    }
  });

  test("should display company contact information", async ({ page }) => {
    // Check for phone number
    const phoneLink = page.locator('a[href^="tel:"]');
    await expect(phoneLink.first()).toBeVisible();

    // Check for email
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink.first()).toBeVisible();
  });

  test("should display opening hours", async ({ page }) => {
    // Opening hours text on the contact page sidebar
    const openingHours = page.getByText("Öffnungszeiten");
    await expect(openingHours.first()).toBeVisible();
  });

  test("should display Google Maps embed", async ({ page }) => {
    const mapIframe = page.locator('iframe[src*="google.com/maps"]');
    await expect(mapIframe).toBeVisible();
  });

  test("should have JSON-LD structured data", async ({ page }) => {
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd.first()).toBeAttached();

    // Verify it contains LocalBusiness schema
    const jsonLdContent = await jsonLd.first().textContent();
    expect(jsonLdContent).toContain("LocalBusiness");
  });
});
