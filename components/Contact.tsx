import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-10">

          <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
            Contact Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            Let's Get In Touch
          </h2>

          <p className="text-slate-500 mt-3">
            Feel free to contact me through any platform below.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* FOTO */}
          <div className="flex justify-center">

            <div className="relative group">

              <div className="absolute inset-0 bg-sky-400 rounded-full blur-3xl opacity-20"></div>

              <Image
                src="/images/hendi3.png"
                alt="Hendi"
                width={400}
                height={400}
                className="
                relative
                rounded-full
                border-8
                border-white
                shadow-2xl
                transition
                duration-300
                group-hover:scale-105
                object-cover
                "
              />

            </div>

          </div>

          {/* CONTACT */}
          <div className="grid grid-cols-2 gap-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/6283817288514"
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-green-50
              rounded-2xl
              border
              border-green-100
              p-6
              shadow-sm
              transition
              duration-300
              hover:scale-105
              hover:shadow-xl
              hover:shadow-green-200
              group
              "
            >

              <FaWhatsapp className="text-4xl text-green-600 mb-4 group-hover:scale-110 transition" />

              <h3 className="font-bold text-lg text-[#0F172A]">
                WhatsApp
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                083817288514
              </p>

            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/hendi.insight26"
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-pink-50
              rounded-2xl
              border
              border-pink-100
              p-6
              shadow-sm
              transition
              duration-300
              hover:scale-105
              hover:shadow-xl
              hover:shadow-pink-200
              group
              "
            >

              <FaInstagram className="text-4xl text-pink-500 mb-4 group-hover:scale-110 transition" />

              <h3 className="font-bold text-lg text-[#0F172A]">
                Instagram
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                HendiInSight26
              </p>

            </a>

            {/* Email */}
            <a
              href="mailto:hendicprn16@gmail.com"
              className="
              bg-red-50
              rounded-2xl
              border
              border-red-100
              p-6
              shadow-sm
              transition
              duration-300
              hover:scale-105
              hover:shadow-xl
              hover:shadow-red-200
              group
              "
            >

              <FaEnvelope className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition" />

              <h3 className="font-bold text-lg text-[#0F172A]">
                Email
              </h3>

              <p className="text-slate-500 text-sm mt-2 break-all">
                hendicprn16@gmail.com
              </p>

            </a>

            {/* GitHub */}
            <a
              href="https://github.com/hendicprn"
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-slate-100
              rounded-2xl
              border
              border-slate-200
              p-6
              shadow-sm
              transition
              duration-300
              hover:scale-105
              hover:shadow-xl
              hover:shadow-slate-300
              group
              "
            >

              <FaGithub className="text-4xl text-slate-700 mb-4 group-hover:scale-110 transition" />

              <h3 className="font-bold text-lg text-[#0F172A]">
                GitHub
              </h3>

              <p className="text-slate-500 text-sm mt-2">
                hendicprn
              </p>

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}