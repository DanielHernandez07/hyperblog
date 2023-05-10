//ir a la url http:automationpractice.com/.index
//hover del primer prodcuto que encontremos 
// clilck en el primer  producto ver mas detalles
// click en el botón + (dos veces) 
// seleccionar en el menu de dropdown un nuevo tamaño
// click en boton  ñadir carrito 
// verificar (expect) texto esta visible
// click en boton  continuar comprando 
// el modal debe no ser visible
import { test, expect } from '@playwright/test';
test('ad to car', async ({ page }) => {
    //ir a la url https://automationexercise.com/products
    await page.goto('https://automationexercise.com/products');
    //hover del primer prodcuto que encontremos 
    await page.hover('.col-sm-4 div >> nth=0');
    //pause
    await page.pause();
    // clilck en el primer  producto ver mas detalles
    await page.locator('.choose > .nav > li > a').first();
    await page.locator('.choose > .nav > li > a').click();
    // click en el botón + (dos veces) 
    // seleccionar en el menu de dropdown un nuevo tamaño
    // click en boton  ñadir carrito 
    // verificar (expect) texto esta visible
    // click en boton  continuar comprando 
    // el modal debe no ser visible
});
////div[@class='productinfo text-center']