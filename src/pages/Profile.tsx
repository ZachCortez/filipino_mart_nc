import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';
import type { UserProfile } from '../types';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        console.log('Updated profile:', profile);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8" data-aos="zoom-out" data-aos-duration="1000">
            <div className="bg-[#1f1f1f] rounded-lg shadow-md p-6 text-[#f1e8e6] border border-[#3b0a02]">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">My Profile</h1>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-[#fcd34d] hover:text-white transition"
                    >
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium">First Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-[#fcd34d]" />
                                </div>
                                <input
                                    type="text"
                                    disabled={!isEditing}
                                    className="pl-10 block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                    value={profile.firstName}
                                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Last Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-[#fcd34d]" />
                                </div>
                                <input
                                    type="text"
                                    disabled={!isEditing}
                                    className="pl-10 block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                    value={profile.lastName}
                                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-[#fcd34d]" />
                            </div>
                            <input
                                type="email"
                                disabled={!isEditing}
                                className="pl-10 block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Phone</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-5 w-5 text-[#fcd34d]" />
                            </div>
                            <input
                                type="tel"
                                disabled={!isEditing}
                                className="pl-10 block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                value={profile.phone}
                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Address</label>
                        <div className="mt-1 space-y-4">
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPin className="h-5 w-5 text-[#fcd34d]" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Street Address"
                                    disabled={!isEditing}
                                    className="pl-10 block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                    value={profile.address.street}
                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            address: { ...profile.address, street: e.target.value },
                                        })
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="City"
                                    disabled={!isEditing}
                                    className="block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                    value={profile.address.city}
                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            address: { ...profile.address, city: e.target.value },
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    disabled={!isEditing}
                                    className="block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                    value={profile.address.state}
                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            address: { ...profile.address, state: e.target.value },
                                        })
                                    }
                                />
                                <input
                                    type="text"
                                    placeholder="ZIP Code"
                                    disabled={!isEditing}
                                    className="block w-full rounded-md bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-[#fcd34d] focus:ring-[#fcd34d] disabled:opacity-50"
                                    value={profile.address.zipCode}
                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            address: { ...profile.address, zipCode: e.target.value },
                                        })
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {isEditing && (
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 bg-[#fcd34d] text-black py-3 rounded-lg hover:bg-yellow-400 transition-colors"
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
