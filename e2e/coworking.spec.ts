import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/The Nexus Hub|The Hive/)
    // Hero section should be visible
    const hero = page.locator('section').first()
    await expect(hero).toBeVisible()
  })

  test('displays navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('a[href="/plans"]').first()).toBeVisible()
    await expect(page.locator('a[href="/amenities"]').first()).toBeVisible()
    await expect(page.locator('a[href="/events"]').first()).toBeVisible()
  })

  test('displays CTA section', async ({ page }) => {
    await page.goto('/')
    // CTA section with "Book a Tour" or similar
    const ctaLink = page.locator('a[href="/contact"]').first()
    await expect(ctaLink).toBeVisible()
  })
})

test.describe('Plans page', () => {
  test('loads and displays plans', async ({ page }) => {
    await page.goto('/plans')
    await expect(page.locator('h1')).toContainText(/Plans/i)
    // Should show at least one plan card
    const cards = page.locator('a[href^="/plans/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('plan cards have titles', async ({ page }) => {
    await page.goto('/plans')
    // Check for known plan names from imported content
    const pageContent = await page.textContent('body')
    expect(
      pageContent?.includes('Flex Desk') ||
      pageContent?.includes('Dedicated Desk') ||
      pageContent?.includes('Private Office')
    ).toBeTruthy()
  })

  test('plan detail page loads via slug', async ({ page }) => {
    await page.goto('/plans/flex-desk')
    const body = await page.textContent('body')
    expect(body).toBeTruthy()
    // Should not show "Page Not Found"
    expect(body).not.toContain('Page Not Found')
  })
})

test.describe('Amenities page', () => {
  test('loads and displays amenities', async ({ page }) => {
    await page.goto('/amenities')
    await expect(page.locator('h1')).toContainText(/Amenities/i)
    const cards = page.locator('a[href^="/amenities/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('amenity cards have titles', async ({ page }) => {
    await page.goto('/amenities')
    const pageContent = await page.textContent('body')
    expect(
      pageContent?.includes('Meeting Rooms') ||
      pageContent?.includes('Kitchen') ||
      pageContent?.includes('Podcast Studio') ||
      pageContent?.includes('Wellness Room')
    ).toBeTruthy()
  })

  test('amenity detail page loads via slug', async ({ page }) => {
    await page.goto('/amenities/meeting-rooms')
    const body = await page.textContent('body')
    expect(body).toBeTruthy()
    expect(body).not.toContain('Page Not Found')
  })
})

test.describe('Events page', () => {
  test('loads and displays events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText(/Events/i)
    const cards = page.locator('a[href^="/events/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('event cards have titles', async ({ page }) => {
    await page.goto('/events')
    const pageContent = await page.textContent('body')
    expect(
      pageContent?.includes('Pitch Night') ||
      pageContent?.includes('AI Tools') ||
      pageContent?.includes('Friday Social')
    ).toBeTruthy()
  })

  test('event detail page loads via slug', async ({ page }) => {
    await page.goto('/events/pitch-night')
    const body = await page.textContent('body')
    expect(body).toBeTruthy()
    expect(body).not.toContain('Page Not Found')
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    const body = await page.textContent('body')
    expect(body).toBeTruthy()
    expect(body).not.toContain('Page Not Found')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText(/Contact/i)
  })
})

test.describe('Navigation', () => {
  test('clicking Plans nav link navigates to plans page', async ({ page }) => {
    await page.goto('/')
    await page.locator('header a[href="/plans"]').first().click()
    await expect(page).toHaveURL('/plans')
    await expect(page.locator('h1')).toContainText(/Plans/i)
  })

  test('clicking Amenities nav link navigates to amenities page', async ({ page }) => {
    await page.goto('/')
    await page.locator('header a[href="/amenities"]').first().click()
    await expect(page).toHaveURL('/amenities')
    await expect(page.locator('h1')).toContainText(/Amenities/i)
  })
})
