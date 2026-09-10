interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Buscar juegos...",
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--text)" }}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        style={{ color: "var(--text-h)", background: "#0b0b0d", borderColor: "var(--border)" }}
        className="w-full border rounded-xl pl-11 pr-4 py-3 text-sm placeholder-slate-500 transition-all duration-200 outline-none focus:!border-[var(--text-h)] focus:ring-1 focus:ring-[var(--text-h)]"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
