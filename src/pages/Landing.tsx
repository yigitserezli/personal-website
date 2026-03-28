import yapigonLogo from "../assets/yapigonlogo.webp";
import { Link } from "react-router-dom";

const tags = ["React", "React Native", "NodeJS", "Full-Stack Engineer"];

export default function Landing() {
    return (
        <>
            <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-7 pt-40 pb-24 md:px-14 md:pt-48 md:pb-28 xl:px-16 xl:pt-52">
                <div className="tm-dot-grid absolute inset-0 pointer-events-none opacity-25" />
                <div className="tm-radial-monolith absolute inset-0 pointer-events-none" />
                <div className="tm-cinematic-vignette absolute inset-0 pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="tm-blueprint-line-h absolute top-1/4 left-0 opacity-35" />
                <div className="tm-blueprint-line-h absolute right-0 bottom-1/4 opacity-35" />
                <div className="tm-blueprint-line-v absolute top-0 left-1/4 opacity-35" />
                <div className="tm-blueprint-line-v absolute right-1/4 bottom-0 opacity-35" />

                <section id="about" className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col items-center text-center">
                    <div className="mb-12 flex items-center gap-4 md:mb-14">
                        <span className="h-2 w-2 animate-pulse bg-[var(--tm-primary)]" />
                        <span className="font-technical text-xs uppercase tracking-[0.3em] text-[var(--tm-on-surface-variant)]">
                            System.init(YigitSerezli.portfolio)
                        </span>
                    </div>

                    <h1 className="tm-text-glow mb-12 text-6xl leading-[0.86] font-extrabold tracking-[-0.02em] text-[var(--tm-primary)] md:mb-14 md:text-8xl lg:text-[10rem]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        BUILDING HIGH-PERFORMANCE
                        <br />
                        <span className="bg-gradient-to-r from-white via-[#C8C6C5] to-[#474747] bg-clip-text text-transparent">
                            ARCHITECTURES
                        </span>
                    </h1>

                    <p className="mt-4 mb-16 flex flex-wrap justify-center gap-x-8 gap-y-3 font-technical text-xs uppercase tracking-[0.34em] text-[var(--tm-on-surface-variant)] md:mt-6 md:mb-20 md:text-base">
                        {tags.map((tag, index) => (
                            <span key={tag}>
                                {index > 0 && <span className="mx-2 text-[var(--tm-outline-variant)]">/</span>}
                                {tag}
                            </span>
                        ))}
                    </p>

                    <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                        <Link
                            className="group border border-[var(--tm-primary)] bg-[var(--tm-primary)] px-[3.25rem] py-[1.45rem] text-sm font-bold uppercase tracking-[0.2em] text-[var(--tm-on-primary)] transition-all duration-150 hover:bg-[var(--tm-secondary)] md:px-[3.6rem] md:py-[1.6rem]"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
                            to="/projects"
                        >
                            <span className="flex items-center gap-3">
                                Explore Systems
                                <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
                            </span>
                        </Link>

                        <button className="border border-[var(--tm-outline-variant)] px-[3.25rem] py-[1.45rem] font-technical text-xs uppercase tracking-[0.22em] text-[var(--tm-primary)] transition-colors duration-150 hover:border-[var(--tm-primary)] md:px-[3.6rem] md:py-[1.6rem]">
                            View Documentation
                        </button>
                    </div>
                </section>

                <div className="pointer-events-none absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex xl:right-12">
                    <span className="font-technical text-[10px] uppercase tracking-[0.3em] text-[var(--tm-on-surface-variant)]">Scroll for Details</span>
                    <div className="h-24 w-px bg-gradient-to-b from-[var(--tm-primary)] via-[var(--tm-outline-variant)] to-transparent" />
                </div>
            </main>

            <section id="projects" className="border-t border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)] px-6 py-24 md:px-12">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14 flex flex-col gap-4 border-b border-[var(--tm-outline-variant)] pb-8 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-4xl font-bold uppercase tracking-tight text-[var(--tm-primary)]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                                Selected Products
                            </h2>
                            <p className="mt-2 font-technical text-sm uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)]">
                                Live platforms and signature builds
                            </p>
                        </div>
                        <p className="font-technical text-xs uppercase tracking-[0.2em] text-[var(--tm-outline-variant)]">Showing 3 of 10 projects</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                        <a
                            href="https://yapigon.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative block border border-[var(--tm-outline-variant)] bg-[var(--tm-surface)] p-8 transition-colors duration-150 hover:bg-[var(--tm-surface-container-low)] md:col-span-8"
                            aria-label="Open Yapigon website"
                        >
                            <span className="absolute top-4 right-4 font-technical text-[10px] uppercase tracking-widest text-[var(--tm-outline-variant)] opacity-50">
                                0x001
                            </span>
                            <h3 className="mb-4 text-2xl font-bold text-[var(--tm-primary)]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                                Yapigon.com
                            </h3>
                            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--tm-on-surface-variant)]">
                                A multi-sided construction materials marketplace across web and mobile. Buyers publish demand in minutes, while suppliers compete with offers or list opportunity stock to accelerate sourcing and improve price visibility.
                            </p>

                            <div className="mb-10 flex flex-wrap gap-3">
                                {['Google Cloud Platform', 'Spring Boot', 'Next.js', 'Flutter'].map((tech) => (
                                    <span key={tech} className="bg-[var(--tm-surface-container-highest)] px-3 py-1 font-technical text-[10px] uppercase tracking-wider text-[var(--tm-on-surface)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex h-48 items-center justify-center overflow-hidden border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)]">
                                <img
                                    className="h-[62%] w-auto max-w-[68%] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                                    src={yapigonLogo}
                                    alt="Construction marketplace workflow"
                                />
                            </div>
                        </a>

                        <div className="flex flex-col gap-6 md:col-span-4">
                            {[
                                {
                                    title: 'Club App',
                                    text: 'End-to-end youth sports club operating system: manager and coach workflows, student-parent communication, training plans, dues and finance tracking, content publishing, and branded club pages in one platform.',
                                    href: 'http://club-app.com.tr/',
                                },
                                {
                                    title: 'skreentech.com',
                                    text: 'A modern photobooth ecosystem for events. Teams design rich templates, use AI-powered effects like style transfer and people-swap, then deliver event photos instantly through microsites, email, and WhatsApp.',
                                },
                            ].map((item) => (
                                <article key={item.title} className="group border border-[var(--tm-outline-variant)] bg-[var(--tm-surface)] p-6 transition-colors duration-150 hover:bg-[var(--tm-surface-container-low)]">
                                    <h4 className="mb-2 text-lg font-bold uppercase text-[var(--tm-primary)]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                                        {item.title}
                                    </h4>
                                    <p className="mb-4 text-xs leading-relaxed text-[var(--tm-on-surface-variant)]">{item.text}</p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block font-technical text-[10px] uppercase tracking-[0.15em] text-[var(--tm-primary)] transition-transform group-hover:translate-x-1"
                                        >
                                            &gt; View Project
                                        </a>
                                    ) : (
                                        <span className="inline-block font-technical text-[10px] uppercase tracking-[0.15em] text-[var(--tm-primary)] transition-transform group-hover:translate-x-1">
                                            &gt; View Project
                                        </span>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
