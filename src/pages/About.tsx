import myPic from "../assets/my-pic.jpeg";
import { Blank, Fn, Kw, Line, Pun } from "../components/Code";
import { EMAIL, education, experience, stackGroups } from "../content";

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
            I am a co-founder of Otters Studio and a full stack developer with a background in architecture. I
            studied buildings first, and I still design software the same way: structure first, then the details
            people touch.
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
        <Line as="p" className="mt-2 max-w-[38em] text-muted">
          Everything here is in use in my current projects, grouped by where it sits in a product.
        </Line>
        <Blank />
        <Line className="font-mono text-sm text-faint" aria-hidden="true">
          ```ts
        </Line>
        <div
          role="group"
          aria-label="Tech stack"
          className="border-l-2 border-line bg-panel/40 py-1 pl-3 font-mono text-[0.8125rem] leading-[1.75] sm:pl-4 sm:text-[0.875rem]"
        >
          <Line aria-hidden="true">
            <Kw>export const</Kw> <Fn>stack</Fn> <Pun>= {"{"}</Pun>
          </Line>
          {stackGroups.map((group, index) => (
            <div key={group.key} className={index > 0 ? "mt-3" : ""}>
              <Line indent={1} className="text-muted">
                <span aria-hidden="true">// </span>
                {group.note}
              </Line>
              <Line indent={1}>
                <span className="font-semibold text-fg">{group.key}</span>
                <Pun>: </Pun>
                <span aria-hidden="true" className="text-muted">
                  [
                </span>
                {group.items.map((item, itemIndex) => (
                  <span key={item}>
                    {itemIndex > 0 ? <Pun>, </Pun> : null}
                    <span className="whitespace-nowrap text-str">
                      <span aria-hidden="true">"</span>
                      {item}
                      <span aria-hidden="true">"</span>
                    </span>
                  </span>
                ))}
                <span aria-hidden="true" className="text-muted">
                  ],
                </span>
              </Line>
            </div>
          ))}
          <Line aria-hidden="true">
            <Pun>{"};"}</Pun>
          </Line>
        </div>
        <Line className="font-mono text-sm text-faint" aria-hidden="true">
          ```
        </Line>
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
                {item.to ? <time dateTime={item.to}>{formatMonth(item.to)}</time> : "present"}
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
        Otters Studio is open to new projects.{" "}
        <a href={`mailto:${EMAIL}`} className="text-kw underline decoration-1 underline-offset-4 hover:text-fg">
          Email me at {EMAIL}
        </a>{" "}
        and tell me what you are building.
      </Line>
    </div>
  );
}
