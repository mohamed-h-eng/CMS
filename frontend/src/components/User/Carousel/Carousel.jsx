import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "../../Ui/Button/Button";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";


export default function Carousel({ events }) {
  return (
    <section className={styles.featured}>
      <div className={styles.header}>
        <h2>Featured Events</h2>

        <div className={styles.arrows}>
          <button className={`${styles.arrowBtn} featured-prev`} type="button">
            <FiChevronLeft />
          </button>

          <button className={`${styles.arrowBtn} featured-next`} type="button">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".featured-prev",
          nextEl: ".featured-next",
        }}
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        slidesPerView={2.35}
        breakpoints={{
          0: {
            slidesPerView: 1.05,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1.7,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2.35,
            spaceBetween: 24,
          },
        }}
        className={styles.slider}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <article className={styles.card}>
              <img src={event.image} alt={event.title} className={styles.image} />

              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>

                <Button className={styles.viewBtn} type="button">
                  View Event
                </Button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}