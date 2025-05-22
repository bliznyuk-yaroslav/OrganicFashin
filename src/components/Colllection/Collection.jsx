import { useSelector } from "react-redux";
import ImgCollection from "../ImgCollection/ImgCollection";
import Title from "../Title/Title";
import s from "./Collection.module.scss";
import { selectorCollectionSection } from "../../redux/selectors";

export default function Collection() {
  const { title, categories, subtitle } = useSelector(
    selectorCollectionSection
  );
  return (
    <section className={s.collectionWrapper}>
      <div className={s.boxTitle}>
        <Title title={title} s={s} />
      </div>
      <ImgCollection categories={categories} />
      <p className={s.collectionText}>{subtitle}</p>
    </section>
  );
}
