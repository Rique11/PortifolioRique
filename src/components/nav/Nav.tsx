import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare, BsDiagram3 } from "react-icons/bs";
import { Link } from "react-scroll";

const navItems = [
  { to: "home", label: "Início", icon: <BiHomeAlt /> },
  { to: "about", label: "Sobre", icon: <BiUser /> },
  { to: "services", label: "Therion", icon: <BsDiagram3 /> },
  { to: "work", label: "Projetos", icon: <BsBriefcase /> },
  { to: "contact", label: "Contato", icon: <BsChatSquare /> },
];

export const Nav = () => (
  <nav className="floating-nav" aria-label="Navegação principal">
    {navItems.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        className="nav-item"
        activeClass="nav-item-active"
        smooth
        spy
        offset={-80}
        title={item.label}
        aria-label={item.label}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    ))}
  </nav>
);
