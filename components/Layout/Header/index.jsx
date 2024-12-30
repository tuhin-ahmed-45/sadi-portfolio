'use client'
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <div className="py-3 container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" aria-label="Home">
                    <Image src="/logo.png" width={140} height={70} alt="GFS Volt" priority />
                </Link>

                {/* Desktop Navigation Links */}
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

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Open Menu"
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="md:hidden bg-purple-dark dark:bg-purple-light shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(({ id, href, name }) => (
                            <li key={id}>
                                <Link
                                    href={href}
                                    className="text-gray-800 dark:text-white hover:text-primary font-medium transition- 
                                    colors"
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                        <ThemeSwitcher />
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
