export default function Skills() {
  const hardSkills = [
    "PHP",
    "Laravel",
    "MySQL",
    "JavaScript",
    "Next.js",
    "HTML",
    "CSS",
  ];

  const softSkills = [
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Time Management",
    "Fast Learning",
    "Responsibility",
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center text-[#0F172A] mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Hard Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
            Hard Skills
          </h3>

          <div className="space-y-4">
            {hardSkills.map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow"
              >
                💻 {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
            Soft Skills
          </h3>

          <div className="space-y-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow"
              >
                🤝 {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}