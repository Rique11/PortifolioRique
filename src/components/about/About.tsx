import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "@/variants";
import Rique from "@/assets/about.png";

export const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="section" id="about" ref={ref} aria-labelledby="about-title">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="about-image-wrap"
          >
            <img src={Rique} alt="Henrique Cois em um ambiente profissional" className="about-image" />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="section-label">Sobre mim</span>
            <h2 id="about-title" className="section-title mt-4">
              Código, pessoas e <span className="text-gradient">resultado.</span>
            </h2>
            <p className="section-copy mt-5">
              Minha formação técnica caminha junto com a experiência de liderar.
              Na Therion EJ, evoluí da condução de projetos de desenvolvimento e
              impressão 3D para a gestão da área de projetos e, hoje, para a
              presidência da empresa.
            </p>
            <p className="section-copy mt-4">
              Gosto de construir soluções úteis, organizar operações e criar um
              ambiente em que as pessoas consigam fazer o melhor trabalho delas.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="metric-card">
                <strong>{inView ? <CountUp start={0} end={3} duration={2} /> : 0}</strong>
                <span>cargos na Therion</span>
              </div>
              <div className="metric-card">
                <strong>{inView ? <CountUp start={0} end={5} duration={2} /> : 0}+</strong>
                <span>projetos realizados</span>
              </div>
              <div className="metric-card">
                <strong>1</strong>
                <span>ERP desenvolvido</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
