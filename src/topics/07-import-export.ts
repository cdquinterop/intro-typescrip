import { Product, taxCalculation } from "./06-function-destructuracion"
const shoppingCArt: Product[] =[
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "Cart",
        price: 100
    }
]; 

const Tax: number = 0.15;
const [total, tax] = taxCalculation({products: shoppingCArt, tax: Tax});

console.log({total});
console.log({tax})