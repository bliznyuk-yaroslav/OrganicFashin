import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={s.nav}>
      <NavLink>HOME</NavLink>
      <NavLink>ABOUT</NavLink>
      <NavLink>SHOP</NavLink>
      <NavLink>BLOG</NavLink>
      <NavLink>CONTACT</NavLink>
    </nav>
  );
}
