'use client';
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { navLinks } from "@/constants";
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Adjust the value as needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 mb-10 transition-all duration-300 ${isScrolled ? "bg-purple-dark dark:bg-purple-light shadow-lg py-2" : "bg-transparent"}`}
        >
            <div className="py-3 px-2 md:px-0 container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" aria-label="Home">
                    <Image src="/logo.png" width={140} height={70} className="w-[100px] md:w-[120px]" alt="GFS Volt" priority />
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
                    className="lg:hidden text-primary focus:outline-none"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div
                    id="mobile-menu-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)} // Close menu if clicking outside
                >
                    <nav className="bg-purple-dark dark:bg-purple-light shadow-lg absolute top-0 right-0 w-3/4 h-full">
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            {navLinks.map(({ id, href, name }) => (
                                <li key={id}>
                                    <Link
                                        href={href}
                                        className="text-white hover:text-primary font-medium transition-colors"
                                        onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <ThemeSwitcher />
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
