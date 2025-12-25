import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projets</h2>

      <div className="projects-grid reveal">
        <ProjectCard title="Pipeline Data IoT temps réel">
          <p>
            🎯 <strong>Objectif :</strong> Pipeline complet de données IoT en temps réel.
          </p>

          <p>
            🛠️ <strong>Stack :</strong> ESP32 · MQTT · Telegraf · InfluxDB · Grafana · Docker
          </p>

          <p>
            📌 <strong>Réalisations :</strong>
          </p>

          <ul>
            <li>Collecte capteurs temps réel</li>
            <li>Broker MQTT</li>
            <li>Ingestion via Telegraf</li>
            <li>Stockage time-series</li>
            <li>Dashboards Grafana</li>
          </ul>

          <p>
            🚀 <strong>Valeur :</strong> Architecture data temps réel, monitoring, observabilité.
          </p>
        </ProjectCard>

        <ProjectCard title="Portfolio React">
          <p>
            💡 Portfolio personnel au design Apple-like.
          </p>

          <p>
            🛠️ <strong>Stack :</strong> React · Vite · GitHub Pages
          </p>

          <p>
            ✨ Animations au scroll, glassmorphism, UX premium.
          </p>
        </ProjectCard>

        <ProjectCard title="Analyse et préparation de données immobilières ">
          <p>
            🎯 <strong>Objectif :</strong> Préparer et structurer un jeu de données complexe pour des usages analytiques et machine learning.
          </p>

          <p>
            🛠️ <strong>Stack :</strong> Python · Pandas · Scikit-learn
          </p>

          <p>
            📌 <strong>Réalisations :</strong>
          </p>

          <ul>
            <li>Nettoyage et transformation des données</li>
            <li>Feature engineering</li>
            <li>Clustering des biens immobiliers</li>
            <li>Interprétation des résultats</li>
          </ul>

          <p>
            🚀 <strong>Valeur :</strong> Data preparation, qualité des données, pipeline analytique.
          </p>
        </ProjectCard>

      </div>
    </section>
  );
}
