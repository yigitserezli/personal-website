// components/Hero.jsx
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10 backdrop-blur-xs" />

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
                    <span className="block mb-2">Hi, I'm Yigit</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Let's Build Something Great Together
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl">
                    Full Stack Dev. Father of a Husky. I build web & mobile apps with code, coffee and{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">(sometimes)</span> chaos.
                </p>

                <button
                    onClick={() => navigate("/home")}
                    className="mt-8 inline-block bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-full text-white font-medium backdrop-blur-lg border border-white/10 cursor-pointer shadow-lg shadow-black/20 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
                >
                    Enter the Portfolio
                </button>
            </div>
        </section>
    );
}
