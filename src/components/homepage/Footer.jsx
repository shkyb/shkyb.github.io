import { RiBehanceFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

// Assembled at runtime — never a plain string in the DOM
const EMAIL = ["hello", "shakib.design"].join("@");

const socials = [
  { href: "https://github.com/shkyb", icon: <RiGithubFill size={18} />, label: "GitHub" },
  { href: "https://behance.net/shakib-alipour", icon: <RiBehanceFill size={18} />, label: "Behance" },
  { href: "https://linkedin.com/in/shakib-alipour", icon: <RiLinkedinFill size={18} />, label: "LinkedIn" },
];

export default function Footer({ variant = "dark" }) {
  const isDark = variant === "dark"

  return (
    <footer className={`border-t px-6 py-8 md:px-12 lg:px-16 ${isDark ? "bg-foreground border-white/10" : "bg-white border-border"}`}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">

        <p className={`text-xs font-mono ${isDark ? "text-white/40" : "text-muted-foreground"}`}>
          © {2025 === new Date().getFullYear() ? "2025" : `2025–${new Date().getFullYear()}`} Shakib Alipour
        </p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className={`text-xs font-mono transition-colors duration-200 ${isDark ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
          >
            {EMAIL}
          </a>

          <div className={`flex items-center gap-3 border-l pl-4 ${isDark ? "border-white/10" : "border-border"}`}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`transition-colors duration-200 ${isDark ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
