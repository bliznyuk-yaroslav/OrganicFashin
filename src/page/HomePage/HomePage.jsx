import Headers from "../../components/Headers/Headers";
import Hero from "../../components/Hero/Hero";
import s from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <section className={s.container}>
      <Headers />
      <Hero />
    </section>
  );
}
