import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      slug: "sistem-penjualan",
      image: "/images/hendi.png",
      title: "Sistem Penjualan Berbasis Web",
      description:
        "Aplikasi berbasis web untuk mengelola order, pengiriman, invoice, dan laporan penjualan yang dikembangkan selama magang dan tugas akhir.",
    },
    {
      slug: "website-portfolio",
      image: "/images/hendi2.png",
      title: "Website Portfolio",
      description:
        "Website portfolio pribadi menggunakan Next.js untuk menampilkan profil, kemampuan, dan pengalaman proyek.",
    },
    {
      slug: "sistem-inventory",
      image: "/images/hendi3.png",
      title: "Sistem Inventory",
      description:
        "Aplikasi manajemen stok barang untuk pencatatan produk masuk, produk keluar, dan monitoring persediaan.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-6">

          <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
            My Projects
          </span>

          <h2 className="text-3xl font-bold text-[#0F172A]">
            Featured Projects
          </h2>

          <p className="text-slate-500 mt-1 text-sm">
            Some projects that I have built during my internship and personal learning.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">

          {projects.map((project) => (

            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-slate-200
                overflow-hidden
                shadow-sm
                hover:shadow-xl
                hover:shadow-sky-100
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
                h-[460px]
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="
                    w-full
                    h-44
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">

                {/* Judul */}
                <div className="h-14 flex items-start">

                  <h3 className="text-lg font-bold text-[#0F172A] leading-6">
                    {project.title}
                  </h3>

                </div>

                {/* Deskripsi */}
                <div className="h-24 mt-2">

                  <p className="text-slate-600 text-sm leading-6">
                    {project.description}
                  </p>

                </div>

                {/* Read More */}
                <div className="mt-auto pt-4">

                  <span className="inline-flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <span>→</span>
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}