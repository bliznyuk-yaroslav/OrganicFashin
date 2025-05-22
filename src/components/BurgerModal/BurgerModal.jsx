import { useEffect, useRef, useState } from "react";
import s from "./BurgerModal.module.scss";
import clsx from "clsx";
import { RiCloseLargeFill } from "react-icons/ri";
import Nav from "../Nav/Nav";
export default function BurgerModal({ onClose, isOpen }) {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", (e) => {
      const isConfirmModal = document.querySelector(".ModalApproveActionOpen");
      if (isConfirmModal) return;
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    });
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);
  useEffect(() => {
    isOpen ? setTimeout(() => setVisible(true), 10) : setVisible(false);
  }, [isOpen]);
  return (
    <div className={s.cont}>
      <div className={clsx(s.accInf, { [s.active]: visible })}>
        <span className={s.iconClose} onClick={onClose}>
          <RiCloseLargeFill size={20} />
        </span>
        <Nav />
      </div>
    </div>
  );
}
