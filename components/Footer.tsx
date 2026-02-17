"use client";

import Container from "./Container";
import { therapist, footer, navigation } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="bg-text py-16 text-white">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-heading text-xl font-semibold mb-4">
                            {therapist.name}
                        </h3>
                        <p className="font-body text-white/70 text-sm leading-relaxed">
                            {therapist.title}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="font-body text-white/70 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 font-body text-white/70 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="mt-1">📍</span>
                                <span>{therapist.location}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a href={`tel:${therapist.phone}`} className="hover:text-primary transition-colors">
                                    {therapist.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>✉️</span>
                                <a href={`mailto:${therapist.email}`} className="hover:text-primary transition-colors">
                                    {therapist.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4">Office Hours</h4>
                        <ul className="space-y-2 font-body text-white/70 text-sm">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>By appointment</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-body text-white/50 text-sm">
                            {footer.copyright}
                        </p>
                        <p className="font-body text-white/50 text-sm">
                            {footer.disclaimer}
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
