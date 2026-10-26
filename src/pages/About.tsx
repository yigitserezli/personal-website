import { Link } from "react-router-dom";
import myPic from "../assets/my-pic.jpeg";
import { Blank, Line } from "../components/Code";
import { education, experience, skills } from "../content";

// Markdown syntax stays visible but quiet, like an editor without preview.
const Mark = ({ children }: { children: string }) => (
  <span className="mr-[1ch] font-normal text-faint" aria-hidden="true">
    {children}
  </span>
);

const formatMonth = (value: string) => {
  const [year, month] = value.split("-");
  return `${new Date(Number(year), Number(month) - 1).toLocaleString("en", { month: "short" })} ${year}`;
};

export default function About() {
  return (
    <div className="doc max-w-[52rem]">
      <Line as="h1" className="text-3xl text-fg sm:text-5xl">
        <Mark>#</Mark>About
      </Line>
      <Blank />

      <div className="grid gap-x-10 md:grid-cols-[1fr_13rem]">
        <div>
          <Line as="p" className="max-w-[34em] text-lg text-fg">
            I am a full stack developer with a background in architecture. I studied buildings first, and I still
            design software the same way: structure first, then the details people touch.
          </Line>
          <Line as="p" className="mt-4 max-w-[34em] text-muted">
            I moved into software by choice and out of curiosity. Most days run on coffee and walks with my husky, and
            even if I did something else for a living I would still write code for fun.
          </Line>
        </div>
        <figure className="mt-6 md:mt-1">
          <img
            src={myPic}
            alt="Portrait of Yiğit Serezli"
            width={208}
            height={260}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-40 border border-line object-cover grayscale-[35%] md:w-full"
          />
          <figcaption className="mt-2 font-mono text-xs text-muted">İzmir, Türkiye</figcaption>
        </figure>
      </div>
      <Blank />

      <section aria-labelledby="stack">
        <Line as="h2" id="stack" className="text-xl text-fg sm:text-2xl">
          <Mark>##</Mark>What I work with
        </Line>
        <Blank />
        <ul>
          {skills.map((skill) => (
            <Line as="li" key={skill.name} className="mb-3 max-w-[38em]">
              <span className="text-faint" aria-hidden="true">
                -{" "}
              </span>
              <strong className="font-mono font-semibold text-fg">{skill.name}</strong>
              <span className="text-muted">: {skill.text} </span>
              <span className="font-mono text-[0.8125rem] whitespace-nowrap text-str">
                {skill.tags.map((tag) => `\`${tag}\``).join(" ")}
              </span>
            </Line>
          ))}
        </ul>
      </section>
      <Blank />

      <section aria-labelledby="experience">
        <Line as="h2" id="experience" className="text-xl text-fg sm:text-2xl">
          <Mark>##</Mark>Experience
        </Line>
        <Blank />
        <ol>
          {experience.map((item) => (
            <li key={item.role} className="mb-6">
              <Line className="font-mono text-[0.8125rem] text-fn">
                <time dateTime={item.from}>{formatMonth(item.from)}</time>
                {" – "}
                <time dateTime={item.to}>{formatMonth(item.to)}</time>
                <span className="ml-3 text-muted">{item.company}</span>
              </Line>
              <Line as="h3" className="mt-1 text-lg text-fg">
                {item.role}
              </Line>
              <Line as="p" className="mt-1 max-w-[36em] text-muted">
                {item.text}
              </Line>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="education">
        <Line as="h2" id="education" className="text-xl text-fg sm:text-2xl">
          <Mark>##</Mark>Education
        </Line>
        <Blank />
        <ul>
          {education.map((item) => (
            <Line as="li" key={item.school} className="mb-2">
              <span className="text-faint" aria-hidden="true">
                -{" "}
              </span>
              <strong className="font-semibold text-fg">{item.school}</strong>
              <span className="text-muted">
                , {item.field}, {item.years}
              </span>
            </Line>
          ))}
        </ul>
      </section>
      <Blank />

      <Line as="p" className="max-w-[36em] text-fg">
        I take on freelance, consulting and long-term product work.{" "}
        <Link to="/contact" className="text-kw underline decoration-1 underline-offset-4 hover:text-fg">
          Send me a message
        </Link>{" "}
        and tell me what you are building.
      </Line>
    </div>
  );
}
