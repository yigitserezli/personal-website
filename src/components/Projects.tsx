import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Kulüp App",
        description: "Mobile + web app for sports clubs to manage students, payments, and announcements.",
        stack: ["React Native", "Expo", "MongoDb", "Firebase", "Node.js", "JWT", "Socket.io", "MERN"],
        github: "https://github.com/yigitserezli/will-be-here",
        demo: "https://demo-link.com/club-app",
    },
    {
        title: "Work Showcase",
        description: "A full-stack seed project featuring a React-based admin panel, Angular storefront, and a Node.js + SQLite3 backend.",
        stack: ["React", "Vite", "Tailwind", "React Router", "Angular", "Node.js"],
        github: "https://github.com/yigitserezli/will-be-here",
        demo: "https://demo-link.com/work-showcase",
    },
    {
        title: "Külçe CRM App",
        description: "A full-stack CRM application for managing customer data, sales, and inventory.",
        stack: ["React Native", "MySQL", ".NET", "JWT", "Expo", "Figma", "GitHub Projects"],
        github: "https://github.com/yigitserezli/will-be-here",
        demo: "https://demo-link.com/kulce-crm",
    },
    {
        title: "Köyüm App",
        description: "A mobile app for village residents to sell and buy local products, manage payments, and communicate with each other.",
        stack: ["React Native", "Expo", "Firebase", "Node.js", "Socket.io", "MongoDB", "JWT"],
        github: "https://github.com/yigitserezli/will-be-here",
        demo: "https://demo-link.com/koyum-app",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" data-theme="light" className="bg-white text-black py-24 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-100 border border-gray-300 p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between h-full"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-700 mb-4 min-h-[72px]">{project.description}</p>
                                <ul className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((tech, i) => (
                                        <li key={i} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-black hover:text-blue-600 transition"
                                >
                                    <Github className="w-4 h-4 mr-2" /> GitHub
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-black hover:text-blue-600 transition"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
