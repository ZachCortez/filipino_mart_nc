export interface Product {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
    price: string;
    link: string;
}

export const products: Product[] = [
    {
        id: "pillows",
        name: "Pillows Choco-Filled Crackers",
        category: "Snacks",
        image: "/assets/pillows_chocofilled_crackers.jpg",
        description: "Crunchy outside, creamy chocolate inside. A Filipino favorite snack!",
        price: "$2.99",
        link: "/products/snacks"
    },
    {
        id: "pandesal",
        name: "Pan de Sal",
        category: "Bakery",
        image: "/assets/pan_de_sal.jpg",
        description: "Soft, fluffy Filipino bread rolls, best served warm.",
        price: "$3.49",
        link: "/products/bakery"
    }

    // Add more with appropriate links
];
