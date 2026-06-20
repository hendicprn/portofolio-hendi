import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-4xl font-bold text-[#0F172A] mb-12">
        Contact
      </h2>

      <div className="flex flex-col items-center">

        <Image
          src="/images/hendi.png"
          alt="Hendi"
          width={180}
          height={180}
          className="rounded-full object-cover mb-10"
        />

        <div className="grid md:grid-cols-4 gap-6 text-lg w-full">

        <a
            href="https://wa.me/6283817288514"
            target="_blank"
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
            📱
            <p className="font-semibold mt-2">WhatsApp</p>
            <p className="text-sm text-slate-600">
            083817288514
            </p>
        </a>

        <a
            href="https://instagram.com/hendi.inside24"
            target="_blank"
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
            📷
            <p className="font-semibold mt-2">Instagram</p>
            <p className="text-sm text-slate-600">
            @Hendi.Inside24
            </p>
        </a>

        <a
            href="mailto:hendicprn16@gmail.com"
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
            📧
            <p className="font-semibold mt-2">Email</p>
            <p className="text-sm text-slate-600">
            hendicprn16@gmail.com
            </p>
        </a>

        <a
            href="https://github.com/hendicprn"
            target="_blank"
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
            💻
            <p className="font-semibold mt-2">GitHub</p>
            <p className="text-sm text-slate-600">
            hendicprn
            </p>
        </a>

        </div>

      </div>
    </section>
  );
}