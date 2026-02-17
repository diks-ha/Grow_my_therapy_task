"use client";

import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import ConsultationForm from "./ConsultationForm";
import { hero } from "@/lib/data";

export default function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <section className="relative min-h-screen flex items-center bg-secondary pt-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
                </div>

                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left animate-fade-in">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
                                {hero.title}
                            </h1>
                            <p className="font-body text-lg md:text-xl text-text-light mb-8 max-w-xl mx-auto lg:mx-0">
                                {hero.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button variant="primary" size="lg" onClick={() => setIsFormOpen(true)}>
                                    {hero.cta}
                                </Button>

                                <Button variant="outline" size="lg" href="#services">
                                    Learn More
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-12 pt-8 border-t border-border/50">
                                <p className="text-sm text-text-light mb-4">Trusted by professionals in:</p>
                                <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-text-light">
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        Santa Monica
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        Los Angeles
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        California
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                                    alt="Dr. Maya Reynolds - Therapist in Santa Monica"
                                    className="w-full h-auto object-cover" width="500" height="650"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <span className="text-2xl">💚</span>
                                    </div>
                                    <div>
                                        <p className="font-heading font-semibold text-text">15+ Years</p>
                                        <p className="text-sm text-text-light">Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <ConsultationForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </>
    );
}
