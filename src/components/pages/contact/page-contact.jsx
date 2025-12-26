import ContainerLayout from "@/components/templates/layout/container-layout";

import {
    Send, Phone, Mail, MapPin,
    Facebook, Twitter, Linkedin, Instagram,
    ArrowUp, Search, Map, Compass, Clock, ArrowRight,
    Anchor, Camera, Tent, Plane
} from 'lucide-react';

export default function PageContact() {
    return (
        <>
            <section>
                <ContainerLayout>
                    <div className="text-center mb-16">
                        <h4 className="text-primary text-2xl mb-2">Get In Touch</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-title uppercase tracking-tight">Our Contact
                            Informatión</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                        {/* Address */}
                        <div className="h-full bg-white p-6 md:p-8 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                            <div className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                <MapPin size={28} />
                            </div>
                            <div className="text-center sm:text-left flex-1">
                                <h4 className="text-lg font-bold text-title mb-1">Our Address</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    2690 Hiltona Street Victoria Road, New York, Canada
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="h-full bg-white p-6 md:p-8 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                            <div className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                <Phone size={28} />
                            </div>
                            <div className="text-center sm:text-left flex-1">
                                <h4 className="text-lg font-bold text-title mb-1">Phone Number</h4>
                                <p className="text-gray-500 text-sm font-medium">+01 234 567 890</p>
                                <p className="text-gray-500 text-sm font-medium">+09 876 543 210</p>
                            </div>
                        </div>

                        {/* Email — centrada cuando queda sola en md */}
                        <div className="h-full bg-white p-6 md:p-8 rounded-xl border border-gray-100
                    flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6
                    md:col-span-2 md:justify-self-center lg:col-span-1">
                            <div className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                <Mail size={28} />
                            </div>
                            <div className="text-center sm:text-left flex-1">
                                <h4 className="text-lg font-bold text-title mb-1">Email Address</h4>
                                <p className="text-gray-500 text-sm font-medium">mailinfo00@tourm.com</p>
                                <p className="text-gray-500 text-sm font-medium">support24@tourm.com</p>
                            </div>
                        </div>

                    </div>

                </ContainerLayout>
            </section>
        </>
    );
}
