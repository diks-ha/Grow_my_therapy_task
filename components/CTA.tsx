"use client";

import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import ConsultationForm from "./ConsultationForm";
import { cta } from "@/lib/data";

export default function CTA() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
        <section id="contact" className="py-20 bg-primary">
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    {/* Decorative elements */}
                    <div className="flex justify-center mb-8">
                        <span className="text-4xl">🌿</span>
                    </div>

                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {cta.title}
                    </h2>

                    <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        {cta.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => setIsFormOpen(true)}
                        >
                            {cta.button}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-black"
                        >
                            Learn More About My Approach
                        </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-12 pt-8 border-t border-white/20">
                        <p className="text-sm text-white/80 mb-4">
                            Licensed in California • Accepting New Clients
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center text-sm text-white/80">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                In-person sessions
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                Telehealth available
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-white"></span>
                                Flexible scheduling
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
            <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
}
