import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-700">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Nama */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-2">
            Hendi
          </h2>

          <p className="text-slate-400">
            Web Developer • Indonesia 🇮🇩
          </p>

        </div>

        {/* Social */}
        <div className="flex justify-center gap-8 mt-8">

          <a
            href="https://github.com/hendicprn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition duration-300"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/hendi-145911328"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="mailto:hendicprn16@gmail.com"
            className="text-slate-400 hover:text-red-400 hover:scale-110 transition duration-300"
          >
            <FaEnvelope size={28} />
          </a>

        </div>

        {/* Tech */}
        <p className="text-center text-slate-500 mt-8 text-sm">
          Built with ❤️ using{" "}
          <span className="text-sky-400 font-medium">
            Next.js
          </span>{" "}
          &{" "}
          <span className="text-cyan-400 font-medium">
            Tailwind CSS
          </span>
        </p>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6">

          <p className="text-center text-slate-500 text-sm">
            © 2026 Hendi. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}