import s from "./SwiperImg.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { selectorShopSection } from "../../redux/selectors";

export default function SwiperImg() {
  const categories = useSelector(selectorShopSection);
  const extendedImages = [
    ...categories.categories,
    ...categories.categories,
    ...categories.categories,
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={4}
      spaceBetween={16}
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
        <SwiperSlide key={index}>
          <img className={s.img} src={item.image} alt={item.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
