import { motion } from "framer-motion";
import {
    SiReact,
    SiAngular,
    SiDotnet,
    SiFirebase,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiExpo,
    SiTailwindcss,
    SiGithub,
    SiBootstrap,
    SiRedux,
    SiDocker,
} from "react-icons/si";

const stack = [
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
    { name: "React Native", icon: <SiReact />, color: "text-blue-300" }, // 🆕
    { name: "Angular", icon: <SiAngular />, color: "text-red-500" },
    { name: ".NET", icon: <SiDotnet />, color: "text-purple-500" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "GitHub", icon: <SiGithub />, color: "text-gray-400" },
    { name: "Expo", icon: <SiExpo />, color: "text-white" },
    { name: "Vite", icon: <img src="/vite.svg" alt="vite" className="w-12 h-12" />, color: "text-blue-500" },
    { name: "Docker", icon: <SiDocker />, color: "text-blue-300" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
];

export default function TechStackSection() {
    return (
        <section id="tech-stack" data-theme="dark" className="bg-black text-white py-34 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {stack.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                        >
                            <div className={`text-5xl ${tech.color}`}>{tech.icon}</div>
                            <span className="text-sm text-gray-300">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
