import { Link } from "react-router-dom";
import { Blank, CodeLines, Cm, Fn, Kw, Line, Num, Pun, Str } from "../components/Code";
import { projects } from "../content";

const featured = projects.filter((project) => project.featured);

export default function Landing() {
  return (
    <div className="doc max-w-[52rem]">
      <Line className="font-mono text-sm text-muted">
        <Cm>/** Full stack developer based in İzmir, Türkiye. */</Cm>
      </Line>
      <Line as="h1" className="mt-3 text-[2.5rem] text-fg sm:text-6xl lg:text-7xl">
        Yiğit Serezli
        <span className="caret" aria-hidden="true" />
      </Line>
      <Line as="p" className="mt-5 max-w-[34em] text-lg text-muted sm:text-xl">
        I build web and mobile products end to end: the API, the database, the app in your hand, and the small details
        that make it feel finished.
      </Line>
      <Blank />

      <CodeLines label="Profile as code">
        <Line>
          <Kw>export const</Kw> <Fn>yigit</Fn> <Pun>=</Pun> <Pun>{"{"}</Pun>
        </Line>
        <Line indent={1}>
          role<Pun>:</Pun> <Str>Full stack developer</Str>
          <Pun>,</Pun>
        </Line>
        <Line indent={1}>
          location<Pun>:</Pun> <Str>İzmir, TR</Str>
          <Pun>,</Pun>
        </Line>
        <Line indent={1}>
          stack<Pun>: [</Pun>
          <Str>React</Str>
          <Pun>, </Pun>
          <Str>React Native</Str>
          <Pun>, </Pun>
          <Str>Node.js</Str>
          <Pun>, </Pun>
          <Str>TypeScript</Str>
          <Pun>],</Pun>
        </Line>
        <Line indent={1}>
          background<Pun>:</Pun> <Str>architecture</Str>
          <Pun>,</Pun>
        </Line>
        <Line indent={1}>
          poweredBy<Pun>: [</Pun>
          <Str>coffee</Str>
          <Pun>, </Pun>
          <Str>a husky</Str>
          <Pun>],</Pun>
        </Line>
        <Line indent={1}>
          products<Pun>:</Pun> <Num>{projects.length}</Num>
          <Pun>,</Pun>
        </Line>
        <Line indent={1}>
          availableForWork<Pun>:</Pun> <Kw>true</Kw>
          <Pun>,</Pun>
        </Line>
        <Line>
          <Pun>{"};"}</Pun>
        </Line>
      </CodeLines>
      <Blank />

      <Line className="flex flex-wrap gap-3 font-mono text-sm">
        <Link to="/projects" className="bg-kw px-5 py-2.5 font-semibold text-bg hover:opacity-90">
          See projects
        </Link>
        <Link to="/contact" className="border border-line px-5 py-2.5 text-fg hover:border-kw">
          Get in touch
        </Link>
      </Line>
      <Blank />
      <Blank />

      <section aria-labelledby="selected-work">
        <Line as="h2" className="text-xl text-fg sm:text-2xl">
          <span id="selected-work">
            <span className="text-faint" aria-hidden="true">
              //{" "}
            </span>
            Selected work
          </span>
        </Line>
        <Blank />
        <ul>
          {featured.map((project) => (
            <li key={project.name} className="mb-6">
              <Line as="h3" className="text-lg text-fg">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-kw">
                    {project.name}
                    <span className="ml-2 text-sm text-faint" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  project.name
                )}
              </Line>
              <Line as="p" className="mt-1 max-w-[38em] text-muted">
                {project.summary}
              </Line>
              <Line className="mt-1 font-mono text-[0.8125rem]">
                {project.stack.map((item, index) => (
                  <span key={item}>
                    {index > 0 ? <Pun>, </Pun> : null}
                    <Str>{item}</Str>
                  </span>
                ))}
              </Line>
            </li>
          ))}
        </ul>
        <Line className="font-mono text-sm">
          <Link to="/projects" className="text-kw underline decoration-1 underline-offset-4 hover:text-fg">
            All {projects.length} projects in projects.json
          </Link>
        </Line>
      </section>
    </div>
  );
}
