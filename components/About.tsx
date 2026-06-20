import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Foto */}
        <div className="flex justify-center">
          <Image
            src="/images/hendi.png"
            alt="Hendi"
            width={400}
            height={400}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Teks */}
        <div>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
            About
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Saya adalah lulusan D3 Manajemen Informatika yang memiliki
            pengalaman magang di PT IBP Edutech sebagai Web Developer.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            Saya terbiasa mengembangkan aplikasi berbasis web menggunakan
            PHP, Laravel, MySQL, HTML, CSS, dan JavaScript.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Saat ini saya terus belajar teknologi modern seperti Next.js
            untuk meningkatkan kemampuan pengembangan aplikasi web.
          </p>
        </div>

      </div>
    </section>
  );
}