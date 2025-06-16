import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save } from 'lucide-react';
import type { UserProfile } from '../types';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Profile: React.FC = () => {
    React.useEffect(() => {
        AOS.init({ once: true });
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
        <div className="relative min-h-screen py-16 px-6 bg-gradient-to-br from-[#1e1e1e] via-[#2a1a0f] to-[#1e1e1e]">
            {/* Optional background pattern */}
            <div className="absolute inset-0 bg-[url('/assets/filipino-texture.svg')] opacity-[0.04] bg-repeat z-0 pointer-events-none" />

            <div
                className="relative max-w-4xl mx-auto z-10"
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <div className="bg-[#151515] rounded-2xl shadow-2xl border border-[#3b0a02] p-8 md:p-10 text-[#f1e8e6] space-y-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-wide">
                            My Profile
                        </h1>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-yellow-300 hover:text-white text-sm underline decoration-dotted"
                        >
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* First Name */}
                            <InputField
                                label="First Name"
                                icon={<User className="text-yellow-400" />}
                                value={profile.firstName}
                                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                                disabled={!isEditing}
                            />
                            {/* Last Name */}
                            <InputField
                                label="Last Name"
                                icon={<User className="text-yellow-400" />}
                                value={profile.lastName}
                                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                                disabled={!isEditing}
                            />
                        </div>

                        {/* Email */}
                        <InputField
                            label="Email"
                            icon={<Mail className="text-yellow-400" />}
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            disabled={!isEditing}
                        />

                        {/* Phone */}
                        <InputField
                            label="Phone"
                            icon={<Phone className="text-yellow-400" />}
                            value={profile.phone}
                            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                            disabled={!isEditing}
                        />

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">Address</label>
                            <div className="space-y-4">
                                <InputField
                                    placeholder="Street Address"
                                    icon={<MapPin className="text-yellow-400" />}
                                    value={profile.address.street}
                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            address: { ...profile.address, street: e.target.value },
                                        })
                                    }
                                    disabled={!isEditing}
                                />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <SimpleInput
                                        placeholder="City"
                                        value={profile.address.city}
                                        onChange={(e) =>
                                            setProfile({
                                                ...profile,
                                                address: { ...profile.address, city: e.target.value },
                                            })
                                        }
                                        disabled={!isEditing}
                                    />
                                    <SimpleInput
                                        placeholder="State"
                                        value={profile.address.state}
                                        onChange={(e) =>
                                            setProfile({
                                                ...profile,
                                                address: { ...profile.address, state: e.target.value },
                                            })
                                        }
                                        disabled={!isEditing}
                                    />
                                    <SimpleInput
                                        placeholder="ZIP Code"
                                        value={profile.address.zipCode}
                                        onChange={(e) =>
                                            setProfile({
                                                ...profile,
                                                address: { ...profile.address, zipCode: e.target.value },
                                            })
                                        }
                                        disabled={!isEditing}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        {isEditing && (
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 rounded-xl transition-all shadow-md"
                            >
                                <Save className="w-5 h-5" />
                                Save Changes
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

// Reusable input field with icon
const InputField = ({
                        label,
                        icon,
                        value,
                        onChange,
                        disabled = false,
                        placeholder = '',
                    }: {
    label?: string;
    icon: React.ReactNode;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    placeholder?: string;
}) => (
    <div>
        {label && <label className="block text-sm font-semibold mb-1">{label}</label>}
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
            </div>
            <input
                type="text"
                placeholder={placeholder}
                disabled={disabled}
                className="pl-10 w-full rounded-lg bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50 py-2"
                value={value}
                onChange={onChange}
            />
        </div>
    </div>
);

// Reusable simple input (no icon)
const SimpleInput = ({
                         value,
                         onChange,
                         disabled = false,
                         placeholder = '',
                     }: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    placeholder?: string;
}) => (
    <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-lg bg-[#2b2b2b] text-white border border-[#3b0a02] shadow-sm focus:border-yellow-400 focus:ring-yellow-400 disabled:opacity-50 py-2 px-3"
        value={value}
        onChange={onChange}
    />
);
