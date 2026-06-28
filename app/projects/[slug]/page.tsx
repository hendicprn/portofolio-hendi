import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

const projects = {
  "sistem-penjualan": {
    title: "Sistem Penjualan Berbasis Web",

    description:
      "Sistem penjualan berbasis web yang dikembangkan untuk membantu proses pengelolaan order, pengiriman, invoice, dan laporan penjualan secara lebih efektif dan terintegrasi.",

    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],

    images: [
      "/images/hendi.png",
      "/images/hendi2.png",
      "/images/hendi3.png",
    ],
  },

  "website-portfolio": {
    title: "Website Portfolio",

    description:
      "Website portfolio pribadi yang dibuat menggunakan Next.js untuk menampilkan profil, skill, pengalaman, dan project yang pernah dikerjakan.",

    tech: ["Next.js", "TypeScript", "Tailwind CSS"],

    images: [
      "/images/hendi.png",
      "/images/hendi2.png",
      "/images/hendi3.png",
    ],
  },

  "sistem-inventory": {
    title: "Sistem Inventory",

    description:
      "Aplikasi inventory untuk membantu pencatatan stok barang masuk dan keluar serta mempermudah monitoring persediaan.",

    tech: ["PHP", "MySQL", "Bootstrap"],

    images: [
      "/images/hendi.png",
      "/images/hendi2.png",
      "/images/hendi3.png",
    ],
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project =
    projects[slug as keyof typeof projects];

  if (!project) {
    return <h1>Project tidak ditemukan</h1>;
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center">

      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sky-600 font-medium hover:gap-3 transition-all mb-8"
        >
          ← Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Featured Project
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight mb-5">
              {project.title}
            </h1>

            <p className="text-slate-600 leading-8 text-[16px] mb-8">
              {project.description}
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mb-4">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">

              {project.tech.map((item) => (
                <span
                  key={item}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-sky-100
                    text-sky-700
                    font-medium
                    text-sm
                    hover:bg-sky-200
                    hover:scale-105
                    transition
                    cursor-default
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <ProjectGallery
              images={project.images}
              title={project.title}
            />

          </div>

        </div>

      </div>

    </main>
  );
}