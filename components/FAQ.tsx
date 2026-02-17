"use client";

import { useState } from "react";
import Container from "./Container";
import { faqs } from "@/lib/data";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-secondary">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-lg text-text-light">
                        Get answers to common questions about therapy and my practice.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-heading text-lg font-semibold text-text pr-4">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 pt-2">
                                    <p className="font-body text-text-light leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center">
                    <p className="font-body text-text-light mb-4">
                        Have more questions? I'd be happy to answer them.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        Get in touch
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </Container>
        </section>
    );
}
