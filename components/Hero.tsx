import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Kiri */}
          <div>

            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Open To Work
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight mb-4">
              Hi, I'm
              <span className="text-sky-600">
                {" "}Hendi
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
              Web Developer
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Lulusan D3 Manajemen Informatika dengan pengalaman
              membangun aplikasi web menggunakan Laravel,
              PHP, MySQL, JavaScript, dan Next.js.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-10">

              <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-medium">
                Laravel
              </span>

              <span className="bg-violet-50 text-violet-600 px-4 py-2 rounded-full font-medium">
                PHP
              </span>

              <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium">
                MySQL
              </span>

              <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full font-medium">
                Next.js
              </span>

            </div>

            {/* Button */}
            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-[#0F172A] text-white px-7 py-3 rounded-xl hover:bg-slate-800 transition shadow-lg"
              >
                View Projects
              </a>

              <a
                href="/cv-hendi.pdf"
                download
                className="border-2 border-[#0F172A] text-[#0F172A] px-7 py-3 rounded-xl hover:bg-[#0F172A] hover:text-white transition"
              >
                Download CV
              </a>

            </div>

            {/* Statistik */}
            <div className="flex gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-sky-600">
                  3+
                </h3>
                <p className="text-slate-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-600">
                  5+
                </h3>
                <p className="text-slate-500">
                  Technologies
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-600">
                  1+
                </h3>
                <p className="text-slate-500">
                  Year Experience
                </p>
              </div>

            </div>

          </div>

          {/* Kanan */}
          <div className="flex justify-center">

            <div className="relative text-center">

              <div className="absolute inset-0 bg-sky-500 rounded-full blur-3xl opacity-20"></div>

              <Image
                src="/images/hendi.png"
                alt="Hendi"
                width={420}
                height={420}
                priority
                className="relative rounded-full object-cover border-8 border-white shadow-2xl hover:scale-105 transition duration-300"
              />

              {/* Social Media */}
              <div className="flex justify-center gap-6 mt-6">

                <a
                  href="https://github.com/hendicprn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-black transition duration-300 text-3xl"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/hendi-145911328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-600 transition duration-300 text-3xl"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:hendicprn16@gmail.com"
                  className="text-slate-500 hover:text-red-500 transition duration-300 text-3xl"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}