import Avatar from "@/assets/perfil.png";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

export const Banner = () => {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <motion.div
            variants={fadeIn("up", 0.2)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-fuchsia-200">
              <span className="status-dot" aria-hidden="true" />
              Presidente na Therion EJ
            </div>
            <h1 id="hero-title" className="hero-title">
              Henrique <span className="text-gradient">Cois</span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-white/85 md:text-2xl">
              Desenvolvedor full stack e líder de equipes que transforma desafios
              em produtos, processos e resultados.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 md:mx-0 md:text-lg">
              Estudante de Engenharia de Computação na UTFPR, com experiência em
              desenvolvimento, gestão de projetos e liderança organizacional.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a className="btn btn-lg inline-flex items-center gap-3" href="#services">
                Conheça minha trajetória
                <BsArrowDownRight aria-hidden="true" />
              </a>
              <a
                className="secondary-link gap-2"
                href="https://wa.me/5511989852882?text=Ol%C3%A1%2C%20Henrique!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                (11) 98985-2882
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-3 md:justify-start" aria-label="Redes sociais">
              <a className="social-link" href="https://github.com/Rique11" target="_blank" rel="noreferrer" aria-label="GitHub de Henrique">
                <FaGithub aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.linkedin.com/in/henrique-fajardo-59349328a/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Henrique">
                <FaLinkedin aria-hidden="true" />
              </a>
              <a className="social-link" href="https://www.instagram.com/rique.cois/" target="_blank" rel="noreferrer" aria-label="Instagram de Henrique">
                <FaInstagram aria-hidden="true" />
              </a>
              <a className="social-link" href="https://wa.me/5511989852882" target="_blank" rel="noreferrer" aria-label="WhatsApp de Henrique">
                <FaWhatsapp aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.35)}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true, amount: 0.5 }}
            className="hero-portrait-wrap mx-auto"
          >
            <div className="hero-orbit" aria-hidden="true" />
            <img className="hero-portrait" src={Avatar} alt="Henrique Cois" />
            <div className="hero-metric hero-metric-top">
              <strong>3</strong>
              <span>posições de liderança</span>
            </div>
            <div className="hero-metric hero-metric-bottom">
              <strong>ERP</strong>
              <span>case de produto</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
