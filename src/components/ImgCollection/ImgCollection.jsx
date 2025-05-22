import s from "./ImgCollection.module.scss";
export default function ImgCollection({ categories }) {
  return (
    <div className={s.collectionCont}>
      {categories.map((item, index) => (
        <div className={s.boxImg} key={index}>
          <img className={s.img} src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}
