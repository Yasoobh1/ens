import React, { useEffect, useState } from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  const [playAnimation, setPlayAnimation] = useState(false);
  // This will run one time after the component mounts
  useEffect(() => {
    setPlayAnimation(true);
  }, []);

  // AOS.init();
  return (
    <div className="heroslider">
      {/* <div className="overlay"></div> */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div>
            <img
              src="https://www.ens.sch.ae/img/banner/main/Main11.jpg"
              alt="heroimage"
              width={"100%"}
              height={"60%"}
            />
          </div>
          <div>
            <div className="text">
              <span
                style={{
                  color: "rgb(77, 77, 77)",
                  position: "absolute",
                  transform: playAnimation
                    ? "translateX(0%)"
                    : "translateX(-100%)",
                  transition: "1.5s",
                  fontSize: window.innerHeight >= 480 ? "18px" : "35px",
                }}
              >
                EMIRATES NATIONAL SCHOOLS E-SERVICES APP
                <br />
                <span className="hero-sub" style={{ color: "rgb(165, 3, 68)" }}>
                  IS NOW AVAILABLE
                </span>
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ens.sch.ae/img/banner/banner9.png"
            alt="heroimage"
            width={"100%"}
          />
          <div className="text">
            <span
              style={{
                color: "rgb(77, 77, 77)",
                position: "absolute",
                transform: playAnimation
                  ? "translateX(0%)"
                  : "translateX(-100%)",
                transition: "1.5s",
                fontSize: window.innerHeight >= 480 ? "18px" : "35px",
              }}
            >
              EMIRATES NATIONAL SCHOOLS E-SERVICES APP
              <br />
              <span className="hero-sub" style={{ color: "rgb(165, 3, 68)" }}>
                IS NOW AVAILABLE
              </span>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ens.sch.ae/img/banner/banner9.png"
            alt="heroimage"
            width={"100%"}
          />
          <div className="text">
            <span
              style={{
                color: "rgb(77, 77, 77)",
                position: "absolute",
                transform: playAnimation
                  ? "translateX(0%)"
                  : "translateX(-100%)",
                transition: "1.5s",
                fontSize: window.innerHeight >= 480 ? "18px" : "35px",
              }}
            >
              EMIRATES NATIONAL SCHOOLS E-SERVICES APP
              <br />
              <span className="hero-sub" style={{ color: "rgb(165, 3, 68)" }}>
                IS NOW AVAILABLE
              </span>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ens.sch.ae/img/banner/banner9.png"
            alt="heroimage"
            width={"100%"}
          />
          <div className="text">
            <span
              style={{
                color: "rgb(77, 77, 77)",
                position: "absolute",
                transform: playAnimation
                  ? "translateX(0%)"
                  : "translateX(-100%)",
                transition: "1.5s",
                fontSize: window.innerHeight >= 480 ? "18px" : "35px",
              }}
            >
              EMIRATES NATIONAL SCHOOLS E-SERVICES APP
              <br />
              <span className="hero-sub" style={{ color: "rgb(165, 3, 68)" }}>
                IS NOW AVAILABLE
              </span>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
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
