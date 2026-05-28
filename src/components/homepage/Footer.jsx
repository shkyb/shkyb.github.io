import { RiBehanceFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const socials = [
  { href: "https://github.com/shkyb", icon: <RiGithubFill size={18} />, label: "GitHub" },
  { href: "https://behance.net/shakib-alipour", icon: <RiBehanceFill size={18} />, label: "Behance" },
  { href: "https://linkedin.com/in/shakib-alipour", icon: <RiLinkedinFill size={18} />, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground border-t border-white/10 px-6 md:px-12 lg:px-16 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

        <p className="text-xs font-mono text-white/40">
          © {2025 === new Date().getFullYear() ? "2025" : `2025–${new Date().getFullYear()}`} Shakib Alipour
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:shakib.alipour@gmail.com"
            className="text-xs font-mono text-white/60 hover:text-white transition-colors duration-200"
          >
            shakib.alipour@gmail.com
          </a>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/60 hover:text-white transition-colors duration-200"
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
