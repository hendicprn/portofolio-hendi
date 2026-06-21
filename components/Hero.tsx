import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Kiri */}
        <div>
          <p className="text-sky-600 font-semibold mb-3">
            Halo, Saya Hendi 👋
          </p>

          <h1 className="text-5xl font-bold text-[#0F172A] mb-4">
            Web Developer
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Lulusan D3 Manajemen Informatika yang memiliki pengalaman
            mengembangkan aplikasi web menggunakan PHP, Laravel,
            MySQL, dan JavaScript.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#0F172A] text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition shadow-md">
              <a href="#projects">
              Lihat Project
              </a>
            </button>

            <button className="border-2 border-[#0F172A] text-[#0F172A] px-6 py-3 rounded-lg hover:bg-[#0F172A] hover:text-white transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex justify-center">
          <Image
            src="/images/hendi.png"
            alt="Hendi"
            width={350}
            height={350}
            priority
            className="rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </div>

      </div>
    </section>
  );
}