import { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import s from "./Headers.module.scss";
import BurgerModal from "../BurgerModal/BurgerModal";
export default function Headers() {
  const [showBurger, setShowBurger] = useState(false);
  const isOpen = () => setShowBurger(true);
  const onClose = () => setShowBurger(false);
  return (
    <nav className={s.headSect}>
      <Logo />

      <svg className={s.icon} onClick={isOpen}>
        <use xlinkHref="/icons/sprite.svg#icon-burger" />
      </svg>

      <div className={s.visNavMobile}>
        <Nav />
      </div>
      {showBurger && <BurgerModal onClose={onClose} isOpen={isOpen} />}
    </nav>
  );
}
