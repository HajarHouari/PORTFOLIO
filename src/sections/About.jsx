export default function About() {
  return (
    <section id="about">
      <div className="glass float-slow">
        <h2>À propos</h2>

        <p>
          Étudiante en informatique / data, je construis des solutions logicielles
          modernes en combinant développement, analyse de données et sens du design.
        </p>

        <div className="about-grid">
          {/* EXPERIENCES PRO */}
          <div className="cube3d reveal">
            <h3>💼 Expériences professionnelles</h3>

            <div className="cv-item">
              <span className="cv-date">2024 – 2025</span>
              <h4>Alternance – Cheffe de projet IA & Data</h4>
              <p>Implémentation d’un outil d’analyse d’appels IA, utilisant le NLP pour extraire des données. Exploitation des données pour optimiser les performances etajuster les modèles IA. <br /> 
                Gestion du déploiement avec intégration aux systèmes existants et automatisation des processus.<br />
                Analyse de données :  Collecte de données issues de différents outils, comparaison entre indicateurs, identification de leviers d’amélioration et réalisation de bilans d’usage. 
              </p>
      
            </div>

            <div className="cv-item">
              <span className="cv-date">2023</span>
              <h4>Stage – Développement / Data</h4>
              <p>Conception d’applications, traitement de données, collaboration équipe.</p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2022</span>
              <h4>Stage – Administrateur Réseau</h4>
              <p>Déploiement d’une solution de MFA sur les smartphones (BYOD) <br />
                Visualisation des données (Power BI) <br /> 
                <strong>Outils</strong> : HARFANG LAB , CYBER WATCH , VADE, SIEM, MANTRA, CLOUD, Azure Active Directory, AWS, SIEM, Mantra. Azure directory et Power Shell
              </p>
            </div>
          </div>

          {/* FORMATION */}
          <div className="cube3d reveal">
            <h3>🎓 Parcours académique</h3>

            <div className="cv-item">
              <span className="cv-date">2024 – 2026</span>
              <h4>MSc Comuter Science & Data Science</h4>
              <p>Formation alliant bases en programmation, web, bases de données et IA, avec approfondissement en Big Data, éthique des données et projets en entreprise. </p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2021 – 2024</span>
              <h4>Bachelor Ingénierie Numérique (Data & Cloud)</h4>
              <p>Programmation web, IA, Sécurité des systèmes (Cisco), Objets connectés, Mathématiques, cloud (AWS) <br />
                Formations Soft Skills à l’organisation de travail <br />
                Langages : Python, C, C#, C++, HTML, JavaScript, Java, PHP, SQL, Bash, Dart, UI <br />
                Outils & Méthodes : Git, JIRA, VS Code, NLP, Grafana, MQTT, InfluxDB <br />
                Data & ML: Scikit-learn, Pandas, PySpark, PCA, t-SNE, Power BI</p>
            </div>

            <div className="cv-item">
              <span className="cv-date">2019 – 2021</span>
              <h4>CPGE PCSI</h4>
              <p>Rigueur, maths/info, méthode et logique.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
