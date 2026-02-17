"use client";

import Container from "./Container";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                        Specialized Therapy Services
                    </h2>
                    <p className="font-body text-lg text-text-light">
                        I offer evidence-based therapy approaches tailored to your unique needs.
                        Each service is designed to help you find healing, balance, and personal growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <p className="font-body text-text-light mb-6">
                        Not sure which service is right for you? Let's discuss your needs.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        Schedule a free consultation
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </Container>
        </section>
    );
}
