function VerticalLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex justify-center">
      {/* Mobile/Tablet: 3 lines */}
      <div className="w-full max-w-screen-2xl px-6 md:px-12 h-full flex justify-between md:hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-px bg-stone-200" />
        ))}
      </div>

      {/* Desktop: 5 lines */}
      <div className="w-full max-w-screen-2xl px-6 md:px-12 h-full justify-between hidden md:flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-px bg-stone-200" />
        ))}
      </div>
    </div>
  );
}

export default VerticalLines;
