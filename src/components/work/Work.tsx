import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Img1 from "@/assets/portfolio-img1.png";
import Img2 from "@/assets/portfolio-img2.png";
import Img3 from "@/assets/portfolio-img3.png";
import { Workimg } from "./workimg";

const projects = [
  {
    img: Img1,
    nameProjeto: "Interface inspirada no Spotify",
    title: "Frontend com React",
    url: "https://aprendendo-frontend-git-main-rique11s-projects.vercel.app/",
  },
  {
    img: Img2,
    nameProjeto: "Automação de serviços no navegador",
    title: "Automação",
    url: "https://github.com/Rique11/Automacao-no-Navegador",
  },
  {
    img: Img3,
    nameProjeto: "Busca de perfis do GitHub",
    title: "React + API",
    url: "https://aprendendobackend-git-main-rique11s-projects.vercel.app/",
  },
];

export const Work = () => (
  <section className="section" id="work" aria-labelledby="work-title">
    <div className="container mx-auto">
      <motion.div
        variants={fadeIn("up", 0.2)}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label">Projetos selecionados</span>
            <h2 id="work-title" className="section-title mt-4">Construindo na prática.</h2>
            <p className="section-copy mt-4">Alguns projetos que mostram minha experiência com interfaces, APIs e automação.</p>
          </div>
          <a className="secondary-link shrink-0" href="https://github.com/Rique11" target="_blank" rel="noreferrer">
            Ver todos no GitHub
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => <Workimg key={project.nameProjeto} {...project} />)}
        </div>
      </motion.div>
    </div>
  </section>
);
