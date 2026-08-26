import { BsArrowUpRight } from "react-icons/bs";
import { ImgsWorkType } from "./type";

export const Workimg = ({ img, title, nameProjeto, url }: ImgsWorkType) => (
  <a className="project-card group" href={url} target="_blank" rel="noopener noreferrer">
    <div className="project-image-wrap">
      <img className="project-image" src={img} alt={`Prévia do projeto ${nameProjeto}`} />
    </div>
    <div className="flex items-start justify-between gap-4 p-5">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-300">{title}</p>
        <h3 className="font-primary text-lg font-semibold leading-snug text-white">{nameProjeto}</h3>
      </div>
      <BsArrowUpRight className="mt-1 shrink-0 text-xl text-white/50 transition group-hover:text-fuchsia-300" aria-hidden="true" />
    </div>
  </a>
);
