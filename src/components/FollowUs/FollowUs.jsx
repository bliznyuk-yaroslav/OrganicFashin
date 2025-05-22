import Title from "../Title/Title";
import s from "./FollowUs.module.scss";
import Form from "../Form/From";
import { useSelector } from "react-redux";
import { selectorFollowUs } from "../../redux/selectors";
export default function FollowUs() {
  const { title, images } = useSelector(selectorFollowUs);
  return (
    <section className={s.container}>
      <div>
        <Title title={title} s={s} />
        <Form />
      </div>
      <img src={images} alt="Follow img" className={s.img} />
    </section>
  );
}
