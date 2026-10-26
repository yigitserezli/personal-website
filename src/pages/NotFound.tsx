import { Link, useLocation } from "react-router-dom";
import { Blank, Line } from "../components/Code";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="doc max-w-[52rem] font-mono">
      <Line className="text-sm text-muted" aria-hidden="true">
        $ open {pathname}
      </Line>
      <Line as="h1" className="mt-2 text-2xl text-err sm:text-4xl">
        File not found
      </Line>
      <Line as="p" className="mt-4 max-w-[34em] font-sans text-lg text-muted">
        There is no file at <code className="font-mono text-fg">{pathname}</code>. It may have moved, or the link has a
        typo.
      </Line>
      <Blank />
      <Line className="text-sm">
        <Link to="/" className="text-kw underline decoration-1 underline-offset-4 hover:text-fg">
          Open index.tsx
        </Link>
      </Line>
    </div>
  );
}
