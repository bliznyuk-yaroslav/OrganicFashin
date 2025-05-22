import Title from "../Title/Title";
import s from "./FollowUs.module.scss";
import img from "../../images/follow.png";
import Form from "../Form/From";
export default function FollowUs() {
  return (
    <section className={s.container}>
      <div>
        <Title title="FOLLOW US" s={s} />
        <Form />
      </div>
      <img src={img} alt="Follow img" className={s.img} />
    </section>
  );
}
