import { NavLink } from "react-router-dom";
import s from "./Logo.module.scss";
export default function Logo() {
  return (
    <div>
      <NavLink to="/" className={s.logo}>
        ALTANSCHOOL WEB COURSES
      </NavLink>
    </div>
  );
}
