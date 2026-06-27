import {
  FaPhp,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaUsers,
  FaComments,
  FaClock,
  FaLightbulb,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const hardSkills = [
    {
      name: "Laravel",
      level: 90,
      icon: <FaLaravel />,
      color: "text-red-600",
      bg: "bg-red-50",
      bar: "bg-red-400",
      glow: "hover:shadow-red-200",
    },
    {
      name: "PHP",
      level: 85,
      icon: <FaPhp />,
      color: "text-violet-600",
      bg: "bg-violet-50",
      bar: "bg-violet-400",
      glow: "hover:shadow-violet-200",
    },
    {
      name: "MySQL",
      level: 85,
      icon: <SiMysql />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      bar: "bg-blue-400",
      glow: "hover:shadow-blue-200",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: <FaJs />,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      bar: "bg-yellow-400",
      glow: "hover:shadow-yellow-200",
    },
    {
      name: "Next.js",
      level: 75,
      icon: <SiNextdotjs />,
      color: "text-slate-700",
      bg: "bg-slate-100",
      bar: "bg-slate-500",
      glow: "hover:shadow-slate-300",
    },
    // {
    //   name: "HTML",
    //   level: 90,
    //   icon: <FaHtml5 />,
    //   color: "text-orange-600",
    //   bg: "bg-orange-50",
    //   bar: "bg-orange-400",
    //   glow: "hover:shadow-orange-200",
    // },
    {
      name: "CSS",
      level: 85,
      icon: <FaCss3Alt />,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      bar: "bg-cyan-400",
      glow: "hover:shadow-cyan-200",
    },
  ];

  const softSkills = [
    {
      name: "Teamwork",
      icon: <FaUsers />,
      color: "text-pink-600",
      bg: "bg-pink-50",
      glow: "hover:shadow-pink-200",
    },
    {
      name: "Communication",
      icon: <FaComments />,
      color: "text-sky-600",
      bg: "bg-sky-50",
      glow: "hover:shadow-sky-200",
    },
    {
      name: "Problem Solving",
      icon: <FaLightbulb />,
      color: "text-amber-600",
      bg: "bg-amber-50",
      glow: "hover:shadow-amber-200",
    },
    {
      name: "Time Management",
      icon: <FaClock />,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      glow: "hover:shadow-indigo-200",
    },
    {
      name: "Fast Learning",
      icon: <FaCheckCircle />,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      glow: "hover:shadow-emerald-200",
    },
    {
      name: "Responsibility",
      icon: <FaHandshake />,
      color: "text-teal-600",
      bg: "bg-teal-50",
      glow: "hover:shadow-teal-200",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white flex items-center py-12"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <div className="text-center mb-10">

          <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
            My Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            Technologies & Abilities
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* HARD SKILLS */}
          <div>

            <div className="bg-red-50 rounded-2xl px-5 py-3 mb-4 border border-red-100">

              <h3 className="text-2xl font-bold text-red-600">
                💻 Hard Skills
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                Technologies I use to build web applications.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {hardSkills.map((skill) => (

                <div
                  key={skill.name}
                  className={`${skill.bg} ${skill.glow}
                  rounded-2xl border border-slate-200
                  p-4 shadow-sm hover:shadow-xl
                  transition duration-300
                  hover:scale-105 cursor-pointer`}
                >

                  <div className="flex items-center gap-3 mb-3">

                    <div className={`text-3xl ${skill.color}`}>
                      {skill.icon}
                    </div>

                    <div>

                      <p className="font-semibold text-sm">
                        {skill.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {skill.level}%
                      </p>

                    </div>

                  </div>

                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">

                    <div
                      className={`${skill.bar} h-full rounded-full`}
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* SOFT SKILLS */}
          <div>

            <div className="bg-sky-50 rounded-2xl px-5 py-3 mb-4 border border-sky-100">

              <h3 className="text-2xl font-bold text-sky-600">
                🤝 Soft Skills
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                Personal qualities that support my work.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {softSkills.map((skill) => (

                <div
                  key={skill.name}
                  className={`${skill.bg} ${skill.glow}
                  rounded-2xl border border-slate-200
                  p-4 shadow-sm hover:shadow-xl
                  transition duration-300
                  hover:scale-105 cursor-pointer`}
                >

                  <div className={`text-3xl mb-3 ${skill.color}`}>
                    {skill.icon}
                  </div>

                  <p className="font-semibold text-sm">
                    {skill.name}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}