export default function CTA({ text, link, icon = null, target = "_blank", onClick }) {
  return (
    <a
      href={link}
      target={target}
      onClick={onClick}
      className="inline-flex justify-center items-center gap-1 w-fit mt-4 px-12 py-4 rounded-full outline-1 outline-stone-900 bg-stone-50 text-stone-900 text-base font-normal uppercase leading-normal hover:bg-stone-900 hover:text-stone-50 transition-colors"
    >
      {text}
      {icon}
    </a>
  );
}
