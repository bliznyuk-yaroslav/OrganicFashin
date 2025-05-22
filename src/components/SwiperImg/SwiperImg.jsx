import s from "./SwiperImg.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { selectorShopSection } from "../../redux/selectors";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function SwiperImg() {
  const categories = useSelector(selectorShopSection);
  const extendedImages = [
    ...categories.categories,
    ...categories.categories,
    ...categories.categories,
  ];
  // Використання кастомного хука, длля відслідковування медіа
  const is2k = useMediaQuery("(min-width: 1920px)");
  const isDesktop = useMediaQuery("(min-width: 1366px)");
  const isTablet = useMediaQuery("(min-width: 922px)");
  let slideWidth = 134;
  if (is2k) slideWidth = 518;
  else if (isDesktop) slideWidth = 369;
  else if (isTablet) slideWidth = 270;

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={8}
      speed={5000}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      allowTouchMove={false}
      grabCursor={false}
    >
      {extendedImages.map((item, index) => (
        <SwiperSlide key={index} style={{ width: `${slideWidth}px` }}>
          <img className={s.img} src={item.image} alt={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
