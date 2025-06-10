import type { Product } from '../types';

export const products: Product[] = [
    {
        id: 1,                      // number type here
        name: "Pillows Choco-Filled Crackers",
        category: "Snacks",
        image: "/assets/pillows_chocofilled_crackers.jpg",
        description: "Crunchy outside, creamy chocolate inside. A Filipino favorite snack!",
        price: 2.99,                // price as number
        link: "/products/snacks"
    },
    {
        id: 2,
        name: "Pan de Sal",
        category: "Bakery",
        image: "/assets/pan_de_sal.jpg",
        description: "Soft, fluffy Filipino bread rolls, best served warm.",
        price: 3.49,
        link: "/products/bakery"
    }

    // Add more with appropriate links
];
