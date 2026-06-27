import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-8">

          <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Get To Know More
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Foto */}
          <div className="flex justify-center">

            <div className="relative group">

              <div className="absolute inset-0 bg-sky-500 rounded-full blur-3xl opacity-20"></div>

              <Image
                src="/images/hendi2.png"
                alt="Hendi"
                width={400}
                height={400}
                className="
                  relative
                  rounded-3xl
                  object-cover
                  border-8
                  border-white
                  shadow-2xl
                  transition-all
                  duration-500
                  ease-in-out
                  group-hover:scale-105
                "
              />

            </div>

          </div>

          {/* Isi */}
          <div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
              Web Developer based in Indonesia
            </h3>

            <p className="text-slate-600 leading-7 mb-5 text-[15px]">
              Saya adalah lulusan <b>D3 Manajemen Informatika</b> yang
              memiliki pengalaman magang sebagai Web Developer di
              <b> PT IBP Edutech</b>. Saya memiliki ketertarikan besar
              dalam pengembangan aplikasi web dan senang mempelajari
              teknologi baru untuk meningkatkan kemampuan saya.
            </p>

            <div className="grid gap-4">

              {/* Education */}
              <div
                className="
                  bg-amber-50
                  border border-amber-200
                  rounded-2xl
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                  hover:bg-amber-100
                  cursor-pointer
                "
              >
                <h4 className="font-semibold text-amber-600 text-sm mb-1">
                  🎓 Education
                </h4>

                <p className="text-slate-600 text-sm">
                  D3 Manajemen Informatika
                </p>
              </div>

              {/* Internship */}
              <div
                className="
                  bg-sky-50
                  border border-sky-200
                  rounded-2xl
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                  hover:bg-sky-100
                  cursor-pointer
                "
              >
                <h4 className="font-semibold text-sky-600 text-sm mb-1">
                  💼 Internship
                </h4>

                <p className="text-slate-600 text-sm">
                  Web Developer • PT IBP Edutech
                </p>
              </div>

              {/* Current Focus */}
              <div
                className="
                  bg-green-50
                  border border-green-200
                  rounded-2xl
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                  hover:bg-green-100
                  cursor-pointer
                "
              >
                <h4 className="font-semibold text-green-600 text-sm mb-1">
                  🚀 Current Focus
                </h4>

                <p className="text-slate-600 text-sm">
                  Laravel, Next.js, TypeScript, MySQL, UI Design.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}