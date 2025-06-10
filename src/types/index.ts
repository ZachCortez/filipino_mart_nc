export interface Product {
    id: string;
    name: string;
    price: string;
    category: string;
    image: string;
    description: string;
    link: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
}

export interface CheckoutFormData {
    shippingAddress: {
        firstName: string;
        lastName: string;
        street: string;
        city: string;
        state: string;
        zipCode: string;
        phone: string;
    };
    paymentInfo: {
        cardNumber: string;
        expiryDate: string;
        cvv: string;
        nameOnCard: string;
    };
}