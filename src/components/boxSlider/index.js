import React from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, Pagination, Navigation } from "swiper";
let latestNews = [
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "Our Virtual Tours are Live",
  },
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "ENS launched the Centers of Excellence for Technical &amp;",
  },
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "ENS Students attended Borealis Social Fund",
  },
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "Our Virtual Tours are Live",
  },
];

let events = [
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "Our Virtual Tours are Live",
  },
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "ENS launched the Centers of Excellence for Technical &amp;",
  },
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "ENS Students attended Borealis Social Fund",
  },
  {
    img: "https://ens.sch.ae/img/banner/banner9.png",
    title: "Our Virtual Tours are Live",
  },
];

let campuses = [
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
  {
    img: "https://ens.sch.ae/img/rak_camp.jpg",
    title:
      "Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...",
  },
];

export default function BoxSlider(props) {
  return (
    <div className="boxslider">
      {props.latestNews ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={window.innerWidth <= 480 ? 1 : 2}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {latestNews.map((ele) => {
            return (
              <SwiperSlide>
                <div className="imgBox">
                  <img src={ele.img} alt="heroimage" />
                </div>
                <div className="text">
                  <span>{ele.title}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : props.events ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={window.innerWidth <= 480 ? 1 : 2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
          loop={true}
        >
          {events.map((ele) => {
            return (
            <SwiperSlide>
              <div className="imgBox">
              <img src={ele.img} alt="heroimage" />
            </div>
            <div className="text">
                  <span>{ele.title}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          spaceBetween={10}
          slidesPerView={window.innerWidth <= 480 ? 1 : 4}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          {campuses.map((ele) => {
            return (
              <SwiperSlide>
                <img src={ele.img} alt="heroimage" />
                <div className="text">
                  <span>{ele.title}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}

// function Banner() {
//   return (
//     <div className='banner'>
//         <div className='container'>
//             <div className='box'>
//                 <h2>REGISTRATION FOR ACADEMIC YEAR 2022-2023</h2>
//                 <h1>Online</h1>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Banner
