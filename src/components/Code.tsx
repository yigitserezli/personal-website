import type { ElementType, HTMLAttributes, ReactNode } from "react";

type TokenProps = { children: ReactNode };

export const Kw = ({ children }: TokenProps) => <span className="text-kw">{children}</span>;
export const Fn = ({ children }: TokenProps) => <span className="text-fn">{children}</span>;
export const Num = ({ children }: TokenProps) => <span className="text-num">{children}</span>;
export const Pun = ({ children }: TokenProps) => <span className="text-muted">{children}</span>;
export const Cm = ({ children }: TokenProps) => <span className="text-muted">{children}</span>;
export const Str = ({ children }: TokenProps) => <span className="text-str">"{children}"</span>;

type LineProps = HTMLAttributes<HTMLElement> & {
  indent?: number;
  as?: ElementType;
};

// One numbered line of the page "file". `indent` is in two-space steps of the mono font;
// indented lines hang so a soft-wrapped continuation stays to the right of its key.
export function Line({ children, indent = 0, as: Tag = "div", className = "", ...rest }: LineProps) {
  const style = indent ? { paddingLeft: `${indent * 2 + 2}ch`, textIndent: "-2ch" } : undefined;
  return (
    <Tag {...rest} className={`ln ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function Blank() {
  return <div className="ln blank" aria-hidden="true" />;
}

// A block of source code: mono, no wrapping surprises, still numbered with the page.
export function CodeLines({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div role="group" aria-label={label} className="font-mono text-[0.875rem] leading-[1.75] sm:text-[0.9375rem]">
      {children}
    </div>
  );
}
