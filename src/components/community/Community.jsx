import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Community.css";

const Community = () => {
  const breakpoints = {
    220: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
  };
  return (
    <section className="community">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src="/images/logo-blue.png" alt="Logo" />
            <h3 className="title">Our community</h3>
            <p>
              Lorem ipsum dolor sit, <br /> amet consectetur <br /> adipisicing
              elit.
            </p>
          </div>
          <div className="col-lg-8 col-md-6 community__slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".btn__next",
                prevEl: ".btn__prev",
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              slidesPerView={2}
              loop={true}
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <img src="/images/community1.jpg" alt="Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/community2.jpg" alt="Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/community1.jpg" alt="Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/community2.jpg" alt="Image" />
              </SwiperSlide>
            </Swiper>

            <div className="swiper__btn d-flex justify-content-center gap-3">
              <button className="btn__prev">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="btn__next">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
