export default function Button({ text, link }) {
    return (
      <a
        href={link}
        className="inline-block mt-4 px-4 py-2 bg-stone-900 text-white text-sm rounded-full hover:bg-stone-700 transition-colors"
      >
        {text}
      </a>
    );
  }
  