export default function Navbar() {
  return (
    <nav className="bg-[#0F172A] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Hendi</h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <a
              href="#"
              className="text-sky-400 border-b-2 border-sky-400 pb-1"
            >
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-sky-400 transition">
                About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-sky-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-sky-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}