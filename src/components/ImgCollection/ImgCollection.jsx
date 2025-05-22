import s from "./ImgCollection.module.scss";
import coll1 from "../../images/collection1.jpg";
import coll2 from "../../images/collection2.jpg";
import coll3 from "../../images/collection3.jpg";
const images = [coll1, coll2, coll3];
export default function ImgCollection() {
  return (
    <div className={s.collectionCont}>
      {images.map((img, index) => (
        <img className={s.img} src={img} alt={`collection-img${index}`} />
      ))}
    </div>
  );
}
