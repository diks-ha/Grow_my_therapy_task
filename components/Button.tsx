import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    href?: string;
    disabled?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
    href,
    disabled = false,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-body font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-opacity-90 focus:ring-primary hover:shadow-lg hover:-translate-y-0.5",
        secondary:
            "bg-accent text-white hover:bg-opacity-90 focus:ring-accent hover:shadow-lg hover:-translate-y-0.5",
        outline:
            "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

    if (href) {
        return (
            <a href={href} className={styles}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={styles} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
