import { useSelector } from "react-redux";
import SwiperImg from "../SwiperImg/SwiperImg";
import Title from "../Title/Title";
import s from "./Shop.module.scss";
import { selectorShopSection } from "../../redux/selectors";
export default function Shop() {
  const { title } = useSelector(selectorShopSection);
  return (
    <section className={s.shopCont}>
      <div className={s.boxTitle}>
        <Title title={title} s={s} />
      </div>
      <SwiperImg />
      <div className={s.backImg}></div>
    </section>
  );
}
