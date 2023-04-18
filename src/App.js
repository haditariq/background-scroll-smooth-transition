import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "swiper/css";
import React, { useState } from "react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import colorLerp from "color-lerp";

SwiperCore.use([Keyboard, Mousewheel]);

function App() {
  const [background, setBackground] = useState(
    "hsl(0, 100%, 50%)"
  );
  const slides = [
    {
      text: "Component One",
    },
    {
      text: "Component Two",
    },
    {
      text: "Component Three",
    },
  ];

  const handleSlideChange = (swiper) => {
    const { activeIndex } = swiper;
    const colors = colorLerp('hsl(0, 50%, 50%)', 'hsl(100, 50%, 50%)', 3)
    setBackground(colors[activeIndex]);
  };

  return (
    <div style={{ background, transition: "all 1s ease-in-out" }}>
      <Swiper
        onSlideChange={handleSlideChange}
        direction="vertical"
        mousewheel={true}
        slidesPerView={1}
        keyboard={true}
        speed="1500"
        allowTouchMove={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>{item.text}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
