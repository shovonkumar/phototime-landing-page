import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Design.css";
import DesignItem from "./DesignItem";

const Design = () => {
  return (
    <section className="design container" id="design">
      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="ms-lg-auto col-lg-6 text-center text-lg-start">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".button__next",
              prevEl: ".button__prev",
            }}
            pagination={{ type: "fraction" }}
          >
            <SwiperSlide>
              <DesignItem title="design 1" />
            </SwiperSlide>
            <SwiperSlide>
              <DesignItem title="design 2" />
            </SwiperSlide>
            <SwiperSlide>
              <DesignItem title="design 3" />
            </SwiperSlide>
            <SwiperSlide>
              <DesignItem title="design 4" />
            </SwiperSlide>
            <SwiperSlide>
              <DesignItem title="design 5" />
            </SwiperSlide>
          </Swiper>
          <div className="swiper__btn d-flex justify-content-center gap-3">
            <button className="button__prev">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="button__next">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
