import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL, files, links } from "../content";

type Command = {
  id: string;
  label: string;
  hint: string;
  run: () => void;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  theme: "light" | "dark";
};

export default function CommandPalette({ open, onClose, onToggleTheme, theme }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState("");

  const commands = useMemo<Command[]>(
    () => [
      ...files.map((entry) => ({
        id: entry.file,
        label: entry.file,
        hint: "Open file",
        run: () => navigate(entry.path),
      })),
      {
        id: "theme",
        label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
        hint: "Preferences",
        run: onToggleTheme,
      },
      {
        id: "copy-email",
        label: "Copy email address",
        hint: EMAIL,
        run: () => {
          void navigator.clipboard?.writeText(EMAIL);
          setNotice(`Copied ${EMAIL}`);
        },
      },
      ...links
        .filter((link) => link.label !== "email")
        .map((link) => ({
          id: link.label,
          label: `Open ${link.label}`,
          hint: link.display,
          run: () => window.open(link.href, "_blank", "noopener,noreferrer"),
        })),
    ],
    [navigate, onToggleTheme, theme],
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle ? commands.filter((command) => command.label.toLowerCase().includes(needle)) : commands;
  }, [commands, query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      setQuery("");
      setActive(0);
      setNotice("");
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const runCommand = (command: Command) => {
    command.run();
    if (command.id !== "copy-email") {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter" && results[active]) {
      event.preventDefault();
      runCommand(results[active]);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Command palette"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="fixed inset-x-0 top-[12vh] m-0 mx-auto w-[min(36rem,calc(100vw-2rem))] border border-line bg-bg p-0 text-fg shadow-2xl"
    >
      <div className="flex items-center gap-3 border-b border-line px-4">
        <span className="font-mono text-sm text-kw" aria-hidden="true">
          &gt;
        </span>
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-results"
          aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
          aria-label="Type a file or command"
          placeholder="Go to file or run a command"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          className="h-12 w-full bg-transparent font-mono text-sm text-fg placeholder:text-muted focus:outline-none"
        />
      </div>

      <ul id="palette-results" role="listbox" aria-label="Results" className="max-h-80 overflow-y-auto py-1.5">
        {results.map((command, index) => (
          <li
            key={command.id}
            id={`cmd-${command.id}`}
            role="option"
            aria-selected={index === active}
            onMouseMove={() => setActive(index)}
            onClick={() => runCommand(command)}
            className={`flex cursor-pointer items-baseline justify-between gap-4 px-4 py-2 font-mono text-sm ${
              index === active ? "bg-panel text-fg" : "text-muted"
            }`}
          >
            <span className={index === active ? "text-fg" : ""}>{command.label}</span>
            <span className="truncate text-xs text-muted">{command.hint}</span>
          </li>
        ))}
        {results.length === 0 ? (
          <li className="px-4 py-3 font-mono text-sm text-muted">No file or command matches “{query}”.</li>
        ) : null}
      </ul>

      <p role="status" className="min-h-0 border-t border-line px-4 py-2 font-mono text-xs text-muted">
        {notice || "↑↓ to move, enter to open, esc to close"}
      </p>
    </dialog>
  );
}
