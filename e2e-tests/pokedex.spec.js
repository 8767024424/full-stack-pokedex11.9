const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  
  // Test 1: Check front page content
  test('front page can be opened', async ({ page }) => {
     await page.goto('/') 
     
     // FIX: Use getByRole('link') to specifically target the link element, 
     // avoiding the strict mode violation caused by the duplicate text in the <p> tag.
     await expect(page.getByRole('link', { name: 'ivysaur', exact: true })).toBeVisible() 
     
     // Check for the copyright text at the bottom of the page.
     await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  // Test 2: Check navigation to a Pokemon's detail page
  test('ivysaur page can be navigated to and displays content', async ({ page }) => {
    await page.goto('/') 
    
    // 1. Find the link for 'ivysaur' and click it.
    await page.getByRole('link', { name: 'ivysaur', exact: true }).click()
    
    // Check for the URL to ensure navigation was successful (simulated in App.js).
    await expect(page).toHaveURL(/.*ivysaur/) 

    // 2. Check for unique content on the detail page: 'chlorophyll'.
    // The ability name must be tested in lowercase.
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
