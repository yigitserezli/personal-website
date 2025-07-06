import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const sections = [
    { id: "home", label: "Home" },
    { id: "what-i-do", label: "What I Do" },
    { id: "projects", label: "Projects" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
];

const Header: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
    const [activeSection, setActiveSection] = useState<string>("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerTheme, setHeaderTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportMiddle = scrollY + window.innerHeight / 2;

            sections.forEach(({ id }) => {
                const section = document.getElementById(id);
                if (section) {
                    const offsetTop = section.offsetTop;
                    const offsetHeight = section.offsetHeight;

                    if (viewportMiddle >= offsetTop && viewportMiddle < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        const theme = section.dataset.theme as "dark" | "light";
                        if (theme) setHeaderTheme(theme);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        setTimeout(() => handleScroll(), 100); // İlk render'da çalışsın

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (id: string) => {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 80, // Header yüksekliği kadar offset
                behavior: "smooth",
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? `bg-white/10 backdrop-blur-md ${headerTheme === "dark" ? "text-white" : "text-black"}` : "bg-transparent text-black"
            } p-4`}
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-inherit text-xl sm:text-2xl font-bold">Yigit Serezli</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 relative">
                    {sections.map(({ id, label }) => (
                        <li key={id} className="relative">
                            <button
                                onClick={() => handleClick(id)}
                                className={`transition-colors duration-300 ${
                                    activeSection === id ? "text-inherit font-semibold" : "text-gray-500 hover:text-white"
                                }`}
                            >
                                {label}
                            </button>
                            {activeSection === id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-gray-400 to-gray-900 rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button (just hamburger) */}
                {!menuOpen && (
                    <button onClick={() => setMenuOpen(true)} className="md:hidden text-inherit text-3xl z-[999]">
                        <HiMenuAlt3 />
                    </button>
                )}

                {/* Mobile Slide Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 w-3/4 h-screen bg-black/90 backdrop-blur-md z-[999] flex flex-col items-center justify-center space-y-8 md:hidden"
                        >
                            <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-white text-3xl">
                                <HiX />
                            </button>

                            {sections.map(({ id, label }) => (
                                <button
                                    key={id}
                                    onClick={() => handleClick(id)}
                                    className={`text-xl ${
                                        activeSection === id ? "text-cyan-400 font-bold" : "text-gray-200"
                                    } hover:text-white transition`}
                                >
                                    {label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
