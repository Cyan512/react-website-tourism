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
                    <div className="flex flex-wrap gap-8">
                        <div
                            className="flex-1 bg-white p-8 rounded-xl  border border-gray-100 flex items-center gap-6">
                            <div
                                className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                <MapPin size={28}/>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-title mb-1">Our Address</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">2690 Hiltona Street Victoria Road,
                                    New York, Canada</p>
                            </div>
                        </div>
                        <div
                            className="flex-1 bg-white p-8 rounded-xl  border border-gray-100 flex items-center gap-6">
                            <div
                                className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                <Phone size={28}/>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-title mb-1">Phone Number</h4>
                                <p className="text-gray-500 text-sm font-medium">+01 234 567 890</p>
                                <p className="text-gray-500 text-sm font-medium">+09 876 543 210</p>
                            </div>
                        </div>
                        <div
                            className="flex-1 bg-white p-8 rounded-xl  border border-gray-100 flex items-center gap-6">
                            <div
                                className="w-16 h-16 bg-title rounded-full flex items-center justify-center text-white shrink-0">
                                <Mail size={28}/>
                            </div>
                            <div>
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
