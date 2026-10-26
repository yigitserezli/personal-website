import { useState } from "react";
import { Blank, Cm, Line, Pun, Str } from "../components/Code";
import { projects, type ProjectStatus } from "../content";

type Filter = "all" | ProjectStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "all" },
  { value: "live", label: "live" },
  { value: "in-progress", label: "in progress" },
];

// JSON keys are decoration for sighted readers; the values carry the meaning.
const Key = ({ children }: { children: string }) => (
  <span aria-hidden="true" className="inline-block w-[7ch] shrink-0 font-mono text-[0.8125rem] font-normal text-kw">
    {children}
  </span>
);

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((project) => project.status === filter);

  return (
    <div className="doc max-w-[52rem]">
      <Line as="h1" className="text-3xl text-fg sm:text-5xl">
        Projects
      </Line>
      <Line as="p" className="mt-4 max-w-[36em] text-lg text-muted">
        Products I have built or am building: marketplaces, operations software, AI media tools and platforms for
        specific trades.
      </Line>
      <Blank />

      <Line className="font-mono text-sm">
        <fieldset className="flex flex-wrap items-center gap-x-1 gap-y-2">
          <legend className="sr-only">Filter projects by status</legend>
          <Cm>
            <span aria-hidden="true">// filter: </span>
          </Cm>
          {filters.map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer border px-2.5 py-0.5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-kw ${
                filter === option.value ? "border-kw text-fg" : "border-transparent text-muted hover:text-fg"
              }`}
            >
              <input
                type="radio"
                name="status"
                value={option.value}
                checked={filter === option.value}
                onChange={() => setFilter(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </fieldset>
      </Line>
      <Line className="font-mono text-sm" as="p">
        <span role="status">
          <Cm>
            // {visible.length} of {projects.length} projects
          </Cm>
        </span>
      </Line>
      <Blank />

      <Line className="font-mono text-sm text-muted" aria-hidden="true">
        <Pun>[</Pun>
      </Line>
      <ul>
        {visible.map((project, index) => (
          <li key={project.name} className="mb-2">
            <Line className="pl-[2ch] font-mono text-sm" aria-hidden="true">
              <Pun>{"{"}</Pun>
            </Line>
            <div className="pl-[4ch] max-sm:pl-0">
              <Line as="h2" className="flex flex-wrap items-baseline gap-x-3 text-lg text-fg sm:text-xl">
                <Key>name</Key>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-kw">
                    {project.name}
                    <span className="ml-2 text-sm font-normal text-faint" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span>{project.name}</span>
                )}
              </Line>
              <Line className="flex items-baseline gap-3 font-mono text-[0.8125rem]">
                <Key>status</Key>
                {project.status === "live" ? (
                  <span className="text-ok">
                    <span aria-hidden="true">● </span>live
                  </span>
                ) : (
                  <span className="text-fn">
                    <span aria-hidden="true">◐ </span>in progress
                  </span>
                )}
              </Line>
              <Line className="flex items-baseline gap-3">
                <Key>about</Key>
                <p className="max-w-[36em] text-fg">{project.summary}</p>
              </Line>
              <Line className="flex items-baseline gap-3 font-mono text-[0.8125rem]">
                <Key>stack</Key>
                <span>
                  <Pun>[</Pun>
                  {project.stack.map((item, itemIndex) => (
                    <span key={item}>
                      {itemIndex > 0 ? <Pun>, </Pun> : null}
                      <Str>{item}</Str>
                    </span>
                  ))}
                  <Pun>]</Pun>
                </span>
              </Line>
            </div>
            <Line className="pl-[2ch] font-mono text-sm" aria-hidden="true">
              <Pun>{index < visible.length - 1 ? "}," : "}"}</Pun>
            </Line>
          </li>
        ))}
      </ul>
      <Line className="font-mono text-sm text-muted" aria-hidden="true">
        <Pun>]</Pun>
      </Line>
      <Blank />
      <Line as="p" className="font-mono text-sm text-muted">
        <Cm>// Projects without a link are private or run inside a client's own systems.</Cm>
      </Line>
    </div>
  );
}
