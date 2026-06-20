import Image from "next/image";
import Link from "next/link";

const projects = {
  "sistem-penjualan": {
    title: "Sistem Penjualan Berbasis Web",
    description:
      "Sistem penjualan berbasis web yang dikembangkan untuk membantu proses pengelolaan order, pengiriman, invoice, dan laporan penjualan secara lebih efektif dan terintegrasi.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },

  "website-portfolio": {
    title: "Website Portfolio",
    description:
      "Website portfolio pribadi yang dibuat menggunakan Next.js untuk menampilkan profil, skill, pengalaman, dan project yang pernah dikerjakan.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  "sistem-inventory": {
    title: "Sistem Inventory",
    description:
      "Aplikasi inventory untuk membantu pencatatan stok barang masuk dan keluar serta mempermudah monitoring persediaan.",
    tech: ["PHP", "MySQL", "Bootstrap"],
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
    <main className="max-w-6xl mx-auto px-6 py-20">

      <Link
        href="/"
        className="text-sky-600 hover:underline"
      >
        ← Kembali
      </Link>

      <div className="grid md:grid-cols-2 gap-12 mt-10">

        {/* Kiri */}
        <div>
          <h1 className="text-4xl font-bold text-[#0F172A] mb-6">
            {project.title}
          </h1>

          <p className="text-slate-600 leading-relaxed mb-8">
            {project.description}
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Teknologi
          </h2>

          <ul className="space-y-2">
            {project.tech.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Kanan */}
        <div>
          <Image
            src="/images/hendi.png"
            alt={project.title}
            width={700}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </main>
  );
}