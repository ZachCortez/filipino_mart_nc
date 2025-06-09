export interface Product {
    name: string;
    category: string;
    image: string;
    description: string;
    price: string;
}

export const products: Product[] = [
    {
        name: "Pillows Choco-Filled Crackers",
        category: "Snacks",
        image: "/assets/pillows_chocofilled_crackers.jpg",
        description: "Crunchy outside, creamy chocolate inside. A Filipino favorite snack!",
        price: "$2.99"
    },
    {
        name: "Pan de Sal",
        category: "Bakery",
        image: "/assets/pan_de_sal.jpg",
        description: "Soft, fluffy Filipino bread rolls, best served warm.",
        price: "$3.49"
    },

    // Add more products here
    {
        name: "SkyFlakes Crackers",
        category: "Snacks",
        image: "/assets/skyflakes_crackers.jpg",
        description: "Light, crispy, and perfect with coffee or soup.",
        price: "$1.99"
    },
    {
        name: "Chippy Barbecue Corn Chips",
        category: "Snacks",
        image: "/assets/chippy_bbq.jpg",
        description: "Savory and crunchy with classic Filipino BBQ flavor.",
        price: "$2.49"
    },
    {
        name: "Ube Ensaymada",
        category: "Bakery",
        image: "/assets/ube_ensaymada.jpg",
        description: "Soft sweet bread topped with ube, butter, and cheese.",
        price: "$3.99"
    },
    {
        name: "Red Horse Beer",
        category: "Beverages",
        image: "/assets/red_horse_beer.jpg",
        description: "Strong beer with a bold kick. Must be 21+ to purchase.",
        price: "$6.99"
    },
    {
        name: "San Miguel Pale Pilsen",
        category: "Beverages",
        image: "/assets/san_miguel_pale_pilsen.jpg",
        description: "The iconic Filipino lager with a smooth, crisp taste.",
        price: "$5.99"
    },
    {
        name: "Longanisa (Sweet Pork Sausage)",
        category: "Frozen",
        image: "/assets/longanisa_sweet.jpg",
        description: "Authentic Filipino-style sausage, sweet and garlicky.",
        price: "$7.99"
    },
    {
        name: "Tocino (Cured Sweet Pork)",
        category: "Frozen",
        image: "/assets/tocino.jpg",
        description: "Sweet, tender slices of cured pork. Great for silog meals.",
        price: "$6.99"
    },
    {
        name: "Bangus (Milkfish) - Marinated",
        category: "Frozen",
        image: "/assets/marinated_bangus.jpg",
        description: "Boneless milkfish marinated in vinegar and spices.",
        price: "$8.99"
    },
    {
        name: "Lumpiang Shanghai - Frozen",
        category: "Frozen",
        image: "/assets/lumpiang_shanghai.jpg",
        description: "Frozen spring rolls stuffed with ground pork and veggies.",
        price: "$5.99"
    },
    {
        name: "Sarsi Root Beer",
        category: "Beverages",
        image: "/assets/sarsi.jpg",
        description: "A classic Filipino root beer with a unique, nostalgic taste.",
        price: "$1.99"
    },
];
