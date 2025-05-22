import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

export default function Nav({ onClose }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (onClose) onClose();
  };
  return (
    <nav className={s.nav}>
      <button className={s.btn} onClick={() => scrollToSection("home")}>
        HOME
      </button>
      <button className={s.btn} onClick={() => scrollToSection("about")}>
        ABOUT
      </button>
      <button className={s.btn} onClick={() => scrollToSection("shop")}>
        SHOP
      </button>
      <button className={s.btn} onClick={() => scrollToSection("blog")}>
        BLOG
      </button>
      <button className={s.btn} onClick={() => scrollToSection("contact")}>
        CONTACT
      </button>
    </nav>
  );
}
