import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python", color: "#facc15" },
    { icon: <FaHtml5 />, name: "HTML", color: "#f97316" },
    { icon: <FaCss3Alt />, name: "CSS", color: "#3b82f6" },
    { icon: <FaJs />, name: "JavaScript", color: "#facc15" },
    { icon: <FaReact />, name: "React", color: "#61dafb" },
    { icon: <FaJava />, name: "Java", color: "#ef4444" },
    { icon: <FaPhp />, name: "PHP", color: "#6366f1" },
    { icon: <FaDatabase />, name: "SQL", color: "#0ea5e9" },
    { icon: <FaGitAlt />, name: "Git", color: "#f97316" },
    { icon: <FaGithub />, name: "GitHub", color: "#0f172a" },
  ];

  return (
    <section id="skills">
      <div className="glass float-slow">
        <h2>Mes compétences</h2>

        <div className="skills-marquee">
          <div className="skills-track">
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className="skill-card"
                style={{ color: skill.color }}
              >
                <div style={{ fontSize: "2.2rem" }}>{skill.icon}</div>
                <p style={{ marginTop: 12 }}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
