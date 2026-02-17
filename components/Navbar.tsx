"use client";

import { useState, useEffect } from "react";
import Container from "./Container";
import Button from "./Button";
import { navigation, therapist, hero } from "@/lib/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-md py-3"
                : "bg-transparent py-5"
                }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex-shrink-0">
                        <h1 className="font-heading text-xl md:text-2xl font-semibold text-text">
                            {therapist.name}
                        </h1>
                        <p className="text-xs md:text-sm text-text-light hidden md:block">
                            {therapist.title}
                        </p>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-text-light hover:text-primary transition-colors duration-200 font-body text-sm"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button
                    <div className="hidden lg:block">
                        <Button variant="primary" className="w-full justify-center">
                            {hero.cta}
                        </Button>
                    </div> */}

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-text"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-text-light hover:text-primary transition-colors duration-200 font-body"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
}
