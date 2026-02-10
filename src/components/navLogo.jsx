export default function NavLogo({ text = null, icon = null }) {
    return (
      <span>
        <a
          href="./"
          className="flex items-center uppercase gap-2 text-stone-900 hover:text-red-500 font-normal transition-color delay-150"
        >      
          {icon && <span>{icon}</span>}
          <span>{text}</span>
        </a>
      </span>
    );
  }
  