import { motion } from "framer-motion";
import { BsArrowUpRight, BsCheck2 } from "react-icons/bs";
import { fadeIn } from "@/variants";
import { therionRoles } from "./data";

export const Services = () => {
  return (
    <section className="section relative" id="services" aria-labelledby="therion-title">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-label">Trajetória na Therion EJ</span>
          <h2 id="therion-title" className="section-title mt-4">
            De projetos à <span className="text-gradient">presidência.</span>
          </h2>
          <p className="section-copy mt-5">
            Uma jornada de crescimento baseada em assumir responsabilidades cada
            vez maiores, formar pessoas e transformar estratégia em resultado.
          </p>
        </motion.div>

        <div className="relative grid gap-5 lg:grid-cols-3">
          <div className="timeline-line hidden lg:block" aria-hidden="true" />
          {therionRoles.map((item, index) => (
            <motion.article
              key={item.role}
              variants={fadeIn("up", 0.2 + index * 0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className={`role-card ${item.current ? "role-card-current" : ""}`}
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="role-number">0{index + 1}</span>
                {item.current && <span className="current-badge">Atualmente</span>}
              </div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-300">
                {item.eyebrow}
              </p>
              <h3 className="mb-4 font-primary text-2xl font-semibold text-white">
                {item.role}
              </h3>
              <p className="mb-6 text-base leading-7 text-white/70">{item.description}</p>
              <ul className="space-y-3 text-base text-white/85">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <BsCheck2 className="mt-1 shrink-0 text-xl text-fuchsia-400" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.article
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="case-card mt-6"
        >
          <div className="case-grid">
            <div>
              <span className="section-label">Case em destaque</span>
              <h3 className="mt-5 max-w-2xl font-primary text-3xl font-semibold leading-tight text-white md:text-4xl">
                ERP para transformar a gestão da empresa júnior
              </h3>
            </div>
            <div>
              <p className="text-lg leading-8 text-white/75">
                Idealizei e desenvolvi um ERP para centralizar e simplificar a gestão
                da Therion. A solução despertou o interesse de outras empresas juniores
                e de órgãos da faculdade, que solicitaram acesso para também utilizá-la.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" aria-label="Competências aplicadas no ERP">
                {["Produto", "Desenvolvimento", "Gestão", "Escalabilidade"].map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <BsArrowUpRight className="case-arrow" aria-hidden="true" />
        </motion.article>
      </div>
    </section>
  );
};
