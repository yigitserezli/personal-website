// components/Footer.tsx
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 text-sm pt-12 py-6 px-6 sm:px-10 border-t border-white/10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-8">
                {/* Logo / About */}
                <div className="text-center sm:text-left">
                    <h3 className="text-white text-xl font-bold mb-2">Yigit Serezli</h3>
                    <p className="text-gray-400 text-sm">Full Stack Developer crafting elegant web & mobile experiences with modern tools.</p>
                </div>

                {/* Quick Facts or Quote */}
                <div className="text-center">
                    <h4 className="text-white font-semibold mb-2">Words I Code By</h4>
                    <p className="italic text-gray-400">"Code is like humor. When you have to explain it, it’s bad."</p>
                </div>

                {/* Social Links */}
                <div className="text-center sm:text-right">
                    <h4 className="text-white font-semibold mb-2">Connect</h4>
                    <div className="flex sm:justify-end justify-center gap-4">
                        <a href="https://github.com/yigitserezli" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/yigit-serezli" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://instagram.com/yigitserezli" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://facebook.com/yigitserezli35" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center border-t border-white/10 pt-6">
                <p>&copy; {new Date().getFullYear()} Yigit Serezli. Built with React, Vite, and coffee ☕ — All rights reserved.</p>
            </div>
        </footer>
    );
}
