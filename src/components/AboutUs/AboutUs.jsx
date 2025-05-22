import Title from "../Title/Title";
import s from "./AboutUs.module.scss";
import imgAbout from "../../images/AboutUs.jpg";
import { useState } from "react";
import LearnModal from "../LearnModal/LearnModal";
import { useSelector } from "react-redux";
import { selectorAboutUsSection } from "../../redux/selectors";
export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  const { title, subtitle, subtitle2, image } = useSelector(
    selectorAboutUsSection
  );
  return (
    <section className={s.containerAbout}>
      <div className={s.imgCont}>
        <img src={image} alt="" className={s.img} />
      </div>
      <div className={s.contText}>
        <Title title={title} s={s} />
        <p className={s.text}>{subtitle}</p>
        <p className={s.text}>{subtitle2}</p>
        <button className={s.btn} onClick={handleOpenModal}>
          LEARN MORE
        </button>
      </div>
      {showModal && (
        <LearnModal onClose={handleCloseModal} isOpen={handleOpenModal} />
      )}
    </section>
  );
}
