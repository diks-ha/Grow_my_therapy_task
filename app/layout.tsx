import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Dr. Maya Reynolds | Trauma & Anxiety Therapist in Santa Monica, CA",
    description: "Warm, supportive therapy for adults in Santa Monica, CA. Specializing in anxiety therapy, trauma therapy (EMDR), and burnout recovery.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${playfair.variable} ${inter.variable} font-body text-text bg-secondary`}>
                {children}
            </body>
        </html>
    );
}
