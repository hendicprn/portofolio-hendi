import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      slug: "sistem-penjualan",
      title: "Sistem Penjualan Berbasis Web",
      description:
        "Aplikasi berbasis web untuk mengelola order, pengiriman, invoice, dan laporan penjualan yang dikembangkan selama magang dan tugas akhir.",
    },
    {
      slug: "website-portfolio",
      title: "Website Portfolio",
      description:
        "Website portfolio pribadi yang dibuat menggunakan Next.js untuk menampilkan profil, kemampuan, dan pengalaman proyek.",
    },
    {
      slug: "sistem-inventory",
      title: "Sistem Inventory",
      description:
        "Aplikasi manajemen stok barang yang membantu pencatatan produk masuk, produk keluar, dan monitoring persediaan.",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center text-[#0F172A] mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition block h-full"
          >
            <Image
              src="/images/hendi.png"
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4 min-h-[80px]">
                {project.description}
              </p>

              <span className="text-sky-600 font-semibold">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}