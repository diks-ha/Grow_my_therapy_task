"use client";

import Container from "./Container";
import { office } from "@/lib/data";

export default function OfficeGallery() {
    return (
        <section id="office" className="py-20 bg-white">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                        {office.title}
                    </h2>
                    <p className="font-body text-lg text-text-light">
                        {office.description}
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {office.features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-4 bg-secondary rounded-xl"
                        >
                            <span className="text-primary text-xl">✓</span>
                            <span className="font-body text-text">{feature}</span>
                        </div>
                    ))}
                </div>

                {/* Image Gallery */}
                <div className="grid md:grid-cols-3 gap-6">
                    {office.images.map((image, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <img
                                src={image}
                                alt={`Office space ${index + 1} - Santa Monica therapy office`}
                                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Location Info */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 text-text-light">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-body">Located in Santa Monica, CA</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}
