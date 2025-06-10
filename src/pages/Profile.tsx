import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';
import type {UserProfile} from '../types';
import AOS from "aos";
import "aos/dist/aos.css";

export const Profile: React.FC = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    const [profile, setProfile] = useState<UserProfile>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
        },
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditing(false);
        // Handle profile update
        console.log('Updated profile:', profile);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8" data-aos="zoom-out" data-aos-duration="1000">
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">My Profile</h1>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-green-600 hover:text-green-700"
                    >
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    disabled={!isEditing}
                                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                    value={profile.firstName}
                                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    disabled={!isEditing}
                                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                    value={profile.lastName}
                                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                disabled={!isEditing}
                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                disabled={!isEditing}
                                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                value={profile.phone}
                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <div className="mt-1 space-y-4">
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Street Address"
                                    disabled={!isEditing}
                                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                    value={profile.address.street}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        address: { ...profile.address, street: e.target.value }
                                    })}
                                />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="City"
                                    disabled={!isEditing}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                    value={profile.address.city}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        address: { ...profile.address, city: e.target.value }
                                    })}
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    disabled={!isEditing}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                    value={profile.address.state}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        address: { ...profile.address, state: e.target.value }
                                    })}
                                />
                                <input
                                    type="text"
                                    placeholder="ZIP Code"
                                    disabled={!isEditing}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-50"
                                    value={profile.address.zipCode}
                                    onChange={(e) => setProfile({
                                        ...profile,
                                        address: { ...profile.address, zipCode: e.target.value }
                                    })}
                                />
                            </div>
                        </div>
                    </div>

                    {isEditing && (
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            <Save className="h-5 w-5" />
                            Save Changes
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};