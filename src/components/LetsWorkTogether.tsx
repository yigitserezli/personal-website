import { motion } from "framer-motion";
import { Mail, Download, Linkedin, Github } from "lucide-react";

export default function LetsWorkTogether() {
    return (
        <section
            id="contact"
            data-theme="dark"
            className="bg-gradient-to-br from-cyan-800 via-purple-900 to-black text-white py-38 px-6 sm:px-10 text-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    I'm open to freelance, remote, or collaborative opportunities. Whether you have a crazy startup idea or just need help with your
                    app — let's chat!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                    <a
                        href="mailto:devserezli@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
                    >
                        <Mail className="w-4 h-4" /> Email Me
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition"
                    >
                        <Download className="w-4 h-4" /> Download CV
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="https://linkedin.com/in/yigit-serezli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-medium rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition"
                    >
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a
                        href="https://github.com/yigitserezli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-medium rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm transition"
                    >
                        <Github className="w-4 h-4" /> GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
