"use client";

import Container from "./Container";
import Button from "./Button";
import { about } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="py-20 bg-secondary">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=1000&fit=crop"
                                alt="Dr. Maya Reynolds - Santa Monica Therapist"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        {/* Credentials Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
                            <p className="font-heading font-semibold text-text mb-3">Credentials</p>
                            <ul className="space-y-2">
                                {about.credentials.slice(0, 2).map((cred, index) => (
                                    <li key={index} className="text-sm text-text-light flex items-start gap-2">
                                        <span className="text-primary mt-1">✓</span>
                                        {cred}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                            {about.title}
                        </h2>

                        <div className="space-y-4 font-body text-text-light leading-relaxed">
                            {about.bio.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Modalities */}
                        <div className="mt-8">
                            <h3 className="font-heading text-lg font-semibold text-text mb-4">
                                Treatment Modalities
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {about.modalities.map((modality, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                    >
                                        {modality}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Full Credentials List */}
                        <div className="mt-8">
                            <h3 className="font-heading text-lg font-semibold text-text mb-4">
                                Professional Credentials
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {about.credentials.map((cred, index) => (
                                    <li key={index} className="flex items-center gap-2 text-text-light">
                                        <span className="text-primary">✓</span>
                                        {cred}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-8">
                            <Button variant="primary">
                                Work With Me
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
