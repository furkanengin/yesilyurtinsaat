import React from 'react';
// Import Swiper components and Autoplay, FreeMode module
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Slide data array
const slideData = [
    "İnşaat",
    "Konut",
    "Proje",
    "MİMARİ",
    "Yapı",
    "Tasarım",
    "MÜHENDİSLİK",
    "Planlama",
    "Uygulama",
    "Altyapı",
    "Dekorasyon",
    "KALİTE",
    "GÜVEN",
    "Dayanıklılık",
    "ESTETİK",
    "SÜRDÜRÜLEBİLİRLİK",
    "YENİLİK",
    "VİZYON",
    "TEKNOLOJİ",
    "DENEYİM"
];


const HomeMainTextSlider = (
  {
    bgColor = "red-bg-2",
    titleCls = "tp-text-slide-title"
  }) => {
  return (
    <div className="tp-text-slide-area">
      <div className={`tp-text-slide-wrapper ${bgColor}`}>
        <Swiper
          className="tp-text-slide-active slide-transtion"
          loop={true}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={30}
          centeredSlides={true}
          allowTouchMove={false}
          speed={4000}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, FreeMode]}
        >
          {slideData.map((title, index) => (
            <SwiperSlide key={index}>
              <div className="tp-text-slide-item">
                <span className={titleCls}>{title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeMainTextSlider;