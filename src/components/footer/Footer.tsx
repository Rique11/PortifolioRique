import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="container mx-auto flex flex-col items-center justify-between gap-5 pb-24 text-center text-sm text-white/50 md:flex-row md:pb-0 md:text-left">
      <p>© {new Date().getFullYear()} Henrique Cois. Tecnologia com propósito.</p>
      <div className="flex gap-5">
        <a className="footer-link" href="https://github.com/Rique11" target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" /> GitHub
        </a>
        <a className="footer-link" href="https://www.linkedin.com/in/henrique-fajardo-59349328a/" target="_blank" rel="noreferrer">
          <FaLinkedin aria-hidden="true" /> LinkedIn
        </a>
      </div>
    </div>
  </footer>
);
