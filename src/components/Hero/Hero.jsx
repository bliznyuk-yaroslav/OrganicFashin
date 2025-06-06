import { selectorHeroSection } from "../../redux/selectors";
import s from "./Hero.module.scss";

import { useSelector } from "react-redux";
export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { title, subtitle, image } =
    useSelector(selectorHeroSection);

  return (
    <section className={s.heroWrapper}>
     
        <img src={image} alt="Follow img" className={s.imgHero} />
     
      <div className={s.contTextHero}>
        <h1 className={s.heroHeader}>{title}</h1>
        <div className={s.heroBox}>
          <p className={s.textHero}>{subtitle}</p>
          <button className={s.btn} onClick={() => scrollToSection("shop")}>
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
