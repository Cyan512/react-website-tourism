import ContainerLayout from "@/components/templates/layout/container-layout"

import {Send} from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-title text-white pt-16 pb-8">
            <ContainerLayout>
                <div
                    className="flex flex-col lg:flex-row items-center justify-between pb-12 border-b border-gray-500 mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-md text-center lg:text-left">Get
                            Updated The Latest
                            Newsletter</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center  gap-6 lg:w-auto lg:ml-auto">
                        <input type="email" placeholder="Enter Email"
                               className="border px-8 py-3 rounded-full outline-none"/>
                        <button
                            className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-full font-normal flex items-center gap-2 transition-colors justify-center">
                            Subscribe Now
                            <Send size={16}/>
                        </button>
                    </div>
                </div>
                <div></div>
            </ContainerLayout>
            <div className="border-t border-gray-500 pt-8 text-center">
                <p className="text-sm">
                    Copyright 2025 Tourm. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
