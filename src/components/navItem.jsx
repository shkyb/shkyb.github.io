export default function NavItem({ text = null, count = null, icon = null, href = "#" }) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          className="flex items-center uppercase gap-1 text-stone-900 hover:text-red-500 font-normal transition-color delay-150"
        >      
          <span>{text}</span>
          {count !== null && (
            <sup className="text-normal">{count}</sup>
          )}
          {icon && <span>{icon}</span>}
        </a>
      </li>
    );
  }
  