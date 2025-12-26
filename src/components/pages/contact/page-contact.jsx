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
            <main>
                <section>

                </section>
                <section className="w-full h-[450px] relative overflow-hidden">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.137812833132!2d89.2319246!3d24.0121708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84e4f8a3d5f1%3A0x6b772c7a0e365824!2sPabna%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[20%]"
                    ></iframe>
                </section>
            </main>
        </>
    );
}
