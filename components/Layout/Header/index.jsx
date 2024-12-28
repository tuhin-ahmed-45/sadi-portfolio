'use client'
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Adjust the value as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 mb-10 transition-all duration-300 ${isScrolled ? "bg-purple-dark dark:bg-purple-light shadow-lg py-2" : "bg-transparent"
                }`}
        >
            <div className="py-3 container mx-auto flex items-center justify-between ">
                {/* Logo */}
                <Link href="/" aria-label="Home">
                    <Image src="/logo.png" width={140} height={70} alt="GFS Volt" priority />
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex md:items-center space-x-6">
                    {navLinks.map(({ id, href, name }) => (
                        <Link
                            key={id}
                            href={href}
                            className="hover:text-primary font-medium transition-colors"
                        >
                            {name}
                        </Link>
                    ))}
                    <ThemeSwitcher />
                </nav>

                {/* Mobile Menu */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Open Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

        </header>
    );
};

export default Header;
