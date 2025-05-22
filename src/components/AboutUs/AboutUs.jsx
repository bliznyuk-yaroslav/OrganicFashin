import Title from "../Title/Title";
import s from "./AboutUs.module.scss";
import imgAbout from "../../images/AboutUs.png";
import { useState } from "react";
import LearnModal from "../LearnModal/LearnModal";
export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);
  return (
    <section className={s.containerAbout}>
      <div className={s.imgCont}>
        <img src={imgAbout} alt="" className={s.img} />
      </div>
      <div className={s.contText}>
        <Title title="ABOUT US" s={s} />
        <p className={s.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className={s.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
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
