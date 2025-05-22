import { useEffect, useState } from "react";
import s from "./LearnModal.module.scss";

import { RiCloseLargeFill } from "react-icons/ri";
import clsx from "clsx";
import Title from "../Title/Title";
export default function LearnModal({ onClose, isOpen }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKeyDown);

    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    isOpen ? setTimeout(() => setVisible(true), 10) : setVisible(false);
  }, [isOpen]);
  return (
    <section
      className={clsx(s.container, "LearnModal", {
        [s.active]: visible,
      })}
    >
      <div className={s.box}>
        <span className={s.iconClose} onClick={onClose}>
          <RiCloseLargeFill size={28} />
        </span>
        <Title title="About ORGANIC FASHION" s={s} />
        <p className={s.text}>
          ORGANIC FASHION is a curated space for plant lovers and those who seek
          to bring a touch of nature into their everyday lives. We offer a
          diverse selection of indoor and decorative plants — from classic
          favorites to rare finds, succulents, cacti, and more. Every plant is
          carefully selected and shipped with love, ensuring it arrives healthy
          and ready to thrive in your space. At ORGANIC FASHION, we believe that
          plants are more than just decor — they are a lifestyle. Add freshness,
          calm, and natural beauty to your home or office with our green
          collection.
        </p>
      </div>
    </section>
  );
}
