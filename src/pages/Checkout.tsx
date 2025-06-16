import React, { useState } from 'react';
import { CreditCard, Truck, ChevronRight } from 'lucide-react';
import { type CheckoutFormData } from '../types';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        console.log('Processing payment:', formData);
    };

    const inputClassName =
        'h-input px-4 w-full rounded-xl border border-gray-300 bg-white shadow-sm focus:border-yellow-500 focus:ring-yellow-500 text-base';
    const labelClassName = 'block text-sm font-semibold text-gray-700 mb-1';

    return (
        <div
            className="max-w-3xl mx-auto px-4 py-10 rounded-xl shadow-inner"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{
                background: 'linear-gradient(to bottom right, #fef9f4, #fdf6ee)',
            }}
        >
            {/* Stepper */}
            <div className="flex items-center justify-between bg-yellow-50 p-4 rounded-xl shadow mb-8">
                <div className="flex items-center">
                    <div
                        className={`rounded-full p-3 ${
                            step === 'shipping' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-600'
                        }`}
                    >
                        <Truck className="h-6 w-6" />
                    </div>
                    <ChevronRight className="h-5 w-5 mx-2 text-gray-400" />
                    <div
                        className={`rounded-full p-3 ${
                            step === 'payment' ? 'bg-green-700 text-white' : 'bg-green-100 text-green-600'
                        }`}
                    >
                        <CreditCard className="h-6 w-6" />
                    </div>
                </div>
                <span className="text-sm text-gray-500">Step {step === 'shipping' ? '1' : '2'} of 2</span>
            </div>

            {/* Shipping Form */}
            {step === 'shipping' ? (
                <form
                    onSubmit={handleShippingSubmit}
                    className="space-y-6 bg-white p-6 rounded-2xl shadow-md"
                >
                    <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {['firstName', 'lastName'].map((field, i) => (
                            <div key={i}>
                                <label className={labelClassName}>
                                    {field === 'firstName' ? 'First Name' : 'Last Name'}
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder={`Enter ${field === 'firstName' ? 'first' : 'last'} name`}
                                    className={inputClassName}
                                    value={formData.shippingAddress[field as 'firstName' | 'lastName']}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            shippingAddress: {
                                                ...formData.shippingAddress,
                                                [field]: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className={labelClassName}>Street Address</label>
                        <input
                            type="text"
                            required
                            placeholder="123 Patis Road"
                            className={inputClassName}
                            value={formData.shippingAddress.street}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    shippingAddress: { ...formData.shippingAddress, street: e.target.value },
                                })
                            }
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {['city', 'state', 'zipCode'].map((field, i) => (
                            <div key={i}>
                                <label className={labelClassName}>
                                    {field === 'zipCode' ? 'ZIP Code' : field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder={field === 'zipCode' ? '90210' : field}
                                    className={inputClassName}
                                    value={formData.shippingAddress[field as 'city' | 'state' | 'zipCode']}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            shippingAddress: {
                                                ...formData.shippingAddress,
                                                [field]: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className={labelClassName}>Phone Number</label>
                        <input
                            type="tel"
                            required
                            placeholder="(555) 123-4567"
                            className={inputClassName}
                            value={formData.shippingAddress.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    shippingAddress: { ...formData.shippingAddress, phone: e.target.value },
                                })
                            }
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-input bg-green-700 text-white rounded-xl hover:bg-green-800 transition text-lg font-semibold"
                    >
                        Continue to Payment
                    </button>
                </form>
            ) : (
                <form
                    onSubmit={handlePaymentSubmit}
                    className="space-y-6 bg-white p-6 rounded-2xl shadow-md"
                >
                    <h2 className="text-2xl font-bold text-gray-900">Payment Information</h2>

                    <div>
                        <label className={labelClassName}>Card Number</label>
                        <input
                            type="text"
                            required
                            placeholder="1234 5678 9012 3456"
                            className={inputClassName}
                            value={formData.paymentInfo.cardNumber}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    paymentInfo: { ...formData.paymentInfo, cardNumber: e.target.value },
                                })
                            }
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
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        paymentInfo: { ...formData.paymentInfo, expiryDate: e.target.value },
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className={labelClassName}>CVV</label>
                            <input
                                type="text"
                                required
                                placeholder="123"
                                className={inputClassName}
                                value={formData.paymentInfo.cvv}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        paymentInfo: { ...formData.paymentInfo, cvv: e.target.value },
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label className={labelClassName}>Name on Card</label>
                        <input
                            type="text"
                            required
                            placeholder="Juan Dela Cruz"
                            className={inputClassName}
                            value={formData.paymentInfo.nameOnCard}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    paymentInfo: { ...formData.paymentInfo, nameOnCard: e.target.value },
                                })
                            }
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setStep('shipping')}
                            className="flex-1 h-input bg-yellow-100 text-yellow-800 rounded-xl hover:bg-yellow-200 transition text-lg font-semibold"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="flex-1 h-input bg-green-700 text-white rounded-xl hover:bg-green-800 transition text-lg font-semibold"
                        >
                            Place Order
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
