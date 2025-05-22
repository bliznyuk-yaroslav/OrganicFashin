import ImgCollection from "../ImgCollection/ImgCollection";
import Title from "../Title/Title";
import s from "./Collection.module.scss";

export default function Collection() {
  return (
    <section className={s.collectionWrapper}>
      <Title title="NEW COLLECTION" s={s} />
      <ImgCollection />
      <p className={s.collectionText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </section>
  );
}
