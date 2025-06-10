import React, { useState } from 'react';
import { CreditCard, Truck, ChevronRight } from 'lucide-react';
import {type CheckoutFormData } from '../types';
import AOS from "aos";
import "aos/dist/aos.css";

export const Checkout: React.FC = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
    const [formData, setFormData] = useState<CheckoutFormData>({
        shippingAddress: {
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            phone: '',
        },
        paymentInfo: {
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            nameOnCard: '',
        },
    });

    const handleShippingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('payment');
    };

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle payment processing
        console.log('Processing payment:', formData);
    };

    const inputClassName = "h-input px-4 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-green-500 focus:ring-green-500 text-base";
    const labelClassName = "block text-sm font-semibold text-gray-700 mb-1";

    return (
        <div className=" max-w-3xl  mx-auto px-4 py-6" data-aos="zoom-in" data-aos-duration="1000">
            <div className=" flex items-center rounded-2xl justify-between bg-gray-200 mb-4">
                <div className="flex items-center ">
                    <div className={`rounded-full p-3 ${step === 'shipping' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'}`}>
                        <Truck className="h-6 w-6" />
                    </div>
                    <ChevronRight className="h-5 w-5 mx-2 text-gray-400" />
                    <div className={`rounded-full p-3 ${step === 'payment' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600'}`}>
                        <CreditCard className="h-6 w-6" />
                    </div>
                </div>
                <span className="text-sm text-gray-500">
          Step {step === 'shipping' ? '1' : '2'} of 2 &nbsp;
        </span>
            </div>

            {step === 'shipping' ? (
                <form onSubmit={handleShippingSubmit} className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className={labelClassName}>First Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Enter first name"
                                className={inputClassName}
                                value={formData.shippingAddress.firstName}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    shippingAddress: { ...formData.shippingAddress, firstName: e.target.value }
                                })}
                            />
                        </div>
                        <div>
                            <label className={labelClassName}>Last Name</label>
                            <input
                                type="text"
                                required
                                placeholder="Enter last name"
                                className={inputClassName}
                                value={formData.shippingAddress.lastName}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    shippingAddress: { ...formData.shippingAddress, lastName: e.target.value }
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className={labelClassName}>Street Address</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your street address"
                            className={inputClassName}
                            value={formData.shippingAddress.street}
                            onChange={(e) => setFormData({
                                ...formData,
                                shippingAddress: { ...formData.shippingAddress, street: e.target.value }
                            })}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className={labelClassName}>City</label>
                            <input
                                type="text"
                                required
                                placeholder="City"
                                className={inputClassName}
                                value={formData.shippingAddress.city}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    shippingAddress: { ...formData.shippingAddress, city: e.target.value }
                                })}
                            />
                        </div>
                        <div>
                            <label className={labelClassName}>State</label>
                            <input
                                type="text"
                                required
                                placeholder="State"
                                className={inputClassName}
                                value={formData.shippingAddress.state}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    shippingAddress: { ...formData.shippingAddress, state: e.target.value }
                                })}
                            />
                        </div>
                        <div>
                            <label className={labelClassName}>ZIP Code</label>
                            <input
                                type="text"
                                required
                                placeholder="ZIP code"
                                className={inputClassName}
                                value={formData.shippingAddress.zipCode}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    shippingAddress: { ...formData.shippingAddress, zipCode: e.target.value }
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className={labelClassName}>Phone Number</label>
                        <input
                            type="tel"
                            required
                            placeholder="Enter your phone number"
                            className={inputClassName}
                            value={formData.shippingAddress.phone}
                            onChange={(e) => setFormData({
                                ...formData,
                                shippingAddress: { ...formData.shippingAddress, phone: e.target.value }
                            })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full h-input bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
                    >
                        Continue to Payment
                    </button>
                </form>
            ) : (
                <form onSubmit={handlePaymentSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm" >
                    <h2 className="text-2xl font-bold text-gray-900">Payment Information</h2>
                    <div>
                        <label className={labelClassName}>Card Number</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your card number"
                            className={inputClassName}
                            value={formData.paymentInfo.cardNumber}
                            onChange={(e) => setFormData({
                                ...formData,
                                paymentInfo: { ...formData.paymentInfo, cardNumber: e.target.value }
                            })}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <label className={labelClassName}>Expiry Date</label>
                            <input
                                type="text"
                                required
                                placeholder="MM/YY"
                                className={inputClassName}
                                value={formData.paymentInfo.expiryDate}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    paymentInfo: { ...formData.paymentInfo, expiryDate: e.target.value }
                                })}
                            />
                        </div>
                        <div>
                            <label className={labelClassName}>CVV</label>
                            <input
                                type="text"
                                required
                                placeholder="CVV"
                                className={inputClassName}
                                value={formData.paymentInfo.cvv}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    paymentInfo: { ...formData.paymentInfo, cvv: e.target.value }
                                })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className={labelClassName}>Name on Card</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter name as shown on card"
                            className={inputClassName}
                            value={formData.paymentInfo.nameOnCard}
                            onChange={(e) => setFormData({
                                ...formData,
                                paymentInfo: { ...formData.paymentInfo, nameOnCard: e.target.value }
                            })}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setStep('shipping')}
                            className="flex-1 h-input bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-lg font-semibold"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="flex-1 h-input bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
                        >
                            Place Order
                        </button>
                    </div>
                </form>

            )}
        </div>
    );
};