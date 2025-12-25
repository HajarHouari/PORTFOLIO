import { useState } from "react";

export default function ProjectCard({ title, children }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`project-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="project-card-inner">
        {/* FACE AVANT */}
        <div className="project-card-front">
          <h3>{title}</h3>
          <span className="project-hint">Clique pour voir le projet</span>
        </div>

        {/* FACE ARRIÈRE */}
        <div className="project-card-back">
          {children}
          <span className="project-hint">Clique pour revenir</span>
        </div>
      </div>
    </div>
  );
}
