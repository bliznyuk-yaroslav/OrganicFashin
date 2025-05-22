import { useEffect, useState } from "react";
import s from "./ScrollToTop.module.scss";
import { FaArrowUp } from "react-icons/fa";
import { AiFillCaretUp } from "react-icons/ai";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className={s.scrollToTop} onClick={scrollToTop}>
        <AiFillCaretUp />
      </button>
    )
  );
}
