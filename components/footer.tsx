export function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#4b3821] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg text-[#2a2215]">The Landline Legacy</p>
          <p className="text-[#71522f]">Stories kept for the next generation.</p>
        </div>
        <p className="text-[#71522f]">
          Built to listen — not to automate. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

