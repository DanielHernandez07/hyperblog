import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=magneto365&oq=magneto365&aqs=chrome..69i57.9481j0j2&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Magneto: Ofertas de empleo, trabajo y vacantes febrero 2023 https://www.magneto365.com › ...' }).click();
  await page.locator('#log');
  await page.locator('.filtro');
  await page.locator('a#search-mobile');
  // await page.getByRole('textbox', { name: 'Busca ofertas de empleo' }).click();
  //await page.locator('input.cargo').click();
  //await page.getByRole('textbox', { name: 'Busca ofertas de empleo' }).fill('sura');
  //await page.getByRole('textbox', { name: 'Busca ofertas de empleo' }).press('Enter');
  //await page.getByRole('button', { name: 'buscar' }).click();

});