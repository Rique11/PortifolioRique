import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { fadeIn } from "@/variants";

export const Contact = () => {
  return (
    <section className="section pb-32" id="contact" aria-labelledby="contact-title">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="contact-card"
        >
          <div>
            <span className="section-label">Vamos conversar</span>
            <h2 id="contact-title" className="mt-4 max-w-3xl font-primary text-4xl font-semibold leading-tight text-white md:text-6xl">
              Tem um desafio que combina tecnologia e gestão?
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a className="btn btn-lg inline-flex items-center justify-center gap-3" href="mailto:henriqueGau@therionej.com.br">
              Enviar um e-mail
              <BsArrowUpRight aria-hidden="true" />
            </a>
            <a className="outline-button" href="https://www.linkedin.com/in/henrique-fajardo-59349328a/" target="_blank" rel="noreferrer">
              <FaLinkedin aria-hidden="true" />
              Falar no LinkedIn
            </a>
            <a
              className="outline-button"
              href="https://wa.me/5511989852882?text=Ol%C3%A1%2C%20Henrique!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noreferrer"
              aria-label="Conversar pelo WhatsApp no número (11) 98985-2882"
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp · (11) 98985-2882
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
