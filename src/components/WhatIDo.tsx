import { motion } from "framer-motion";
import { Code, Smartphone, Server, PenTool } from "lucide-react";

const services = [
    {
        title: "Mobile Development",
        icon: <Smartphone size={32} />,
        description: "Crafting performant cross-platform apps with React Native and Expo.",
    },
    {
        title: "Web Applications",
        icon: <Code size={32} />,
        description: "Building clean, scalable frontend systems with React & Angular.",
    },
    {
        title: "Backend / APIs",
        icon: <Server size={32} />,
        description: "Designing robust, secure APIs using Node.js, .NET, and MongoDB or SQL.",
    },
    {
        title: "UI/UX Design Thinking",
        icon: <PenTool size={32} />,
        description: "Focusing on intuitive, user-first design decisions in every build.",
    },
];

export default function WhatIDoSection() {
    return (
        <section data-theme="dark" id="what-i-do" className="bg-black text-white py-44 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">What I Do</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:shadow-xl transition hover:scale-[1.02]"
                        >
                            <div className="mb-4 text-cyan-400">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
