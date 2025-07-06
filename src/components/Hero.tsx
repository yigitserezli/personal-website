import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section data-theme="light" className="relative w-full h-screen overflow-hidden bg-cover bg-center" id="home" style={{ backgroundImage: "url('/hero.jpg')" }}>
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 via-white/20 to-white/30 z-10" />

            {/* Animated Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative z-20 flex items-center h-full px-6 sm:px-12 lg:px-20"
            >
                <div className="text-left max-w-2xl">
                    <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-md leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">
                        I'm Yigit — a Full Stack Dev
                    </h2>

                    <p className="mt-4 text-lg leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">
                        With a background in architecture and a passion for elegant systems, I craft mobile and web applications using React Native,
                        React, Angular, .NET, and Node.js. My focus is on building clean, scalable, and user-centric solutions that bridge creativity
                        with functionality.
                    </p>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-full font-medium shadow-lg hover:from-black hover:to-gray-900 transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
