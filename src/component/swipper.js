// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Lottie from "lottie-react";
import animationData from "../asset/Animation.json";
import animationData2 from "../asset/Animation2.json";
import animationData3 from "../asset/Animation3.json";
import animationData4 from "../asset/Animation4.json";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swipper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Swipper ()  {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>   
        <Lottie style={{ height: "800px" }} animationData={animationData} />
    </SwiperSlide>
    <SwiperSlide>   
        <Lottie style={{ height: "800px" }} animationData={animationData2} />
    </SwiperSlide>
    <SwiperSlide>   
        <Lottie style={{ height: "800px" }} animationData={animationData3} />
    </SwiperSlide>
    <SwiperSlide>   
        <Lottie style={{ height: "800px" }} animationData={animationData4} />
    </SwiperSlide>
   
  </Swiper>
  );
};
export default Swipper;