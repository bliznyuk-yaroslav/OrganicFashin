import s from "./Hero.module.scss";
import heroImg from "../../images/image 1.png";
export default function Hero() {
  return (
    <section className={s.heroWrapper}>
      <div>
        <img src={heroImg} alt="HeroImg" className={s.imgHero} />
      </div>
      <div className={s.contTextHero}>
        <h1 className={s.heroHeader}>ORGANIC FASHION</h1>
        <p className={s.textHero}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className={s.btn}>SHOP NOW</button>
      </div>
    </section>
  );
}
