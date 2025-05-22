import AboutUs from "../../components/AboutUs/AboutUs";
import Collection from "../../components/Colllection/Collection";
import FollowUs from "../../components/FollowUs/FollowUs";
import Headers from "../../components/Headers/Headers";
import Hero from "../../components/Hero/Hero";
import Shop from "../../components/Shop/Shop";
import s from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <section className={s.container}>
      <Headers />
      <div id="home">
        <Hero />
      </div>
      {/* <div id="shop">
        <Shop />
      </div>
      <div id="blog">
        <Collection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <FollowUs />
      </div> */}
    </section>
  );
}
