import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaFilePdf } from "react-icons/fa";

export default function Contact() {
  return (
    <footer id="contact" className="footer reveal">
      <div className="footer-content">
        <p className="footer-text">
          Si mon profil vous plaît, je suis actuellement à la recherche d’une
          <strong> alternance</strong> dans les domaines de la
          <strong> data</strong>, de l’
          <strong>intelligence artificielle</strong> et du
          <strong> cloud</strong>.
          <br />
          N’hésitez pas à me contacter ou à consulter mon CV :
        </p>

        <ul className="footer-links">
          <li>
            <FaEnvelope />
            <a href="mailto:hajar.houari@edu.devinci.fr">
              hajar.houari@edu.devinci.fr
            </a>
          </li>

          <li>
            <FaPhoneAlt />
            <a href="tel:+33650364493">06.50.36.44.93</a>
          </li>

          <li>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <FaFilePdf />
            <a href="/CV-Hajar-Houari.pdf" download>
              Télécharger mon CV
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
