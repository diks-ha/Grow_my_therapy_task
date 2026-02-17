"use client";

import Button from "./Button";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <div
            className="group bg-secondary rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-heading text-xl font-semibold text-text mb-4">
                {service.title}
            </h3>

            {/* Description */}
            <p className="font-body text-text-light mb-6 leading-relaxed">
                {service.description}
            </p>

            {/* Learn More Link */}
            <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium hover:underline group-hover:translate-x-1 transition-transform duration-200"
            >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
    );
}
