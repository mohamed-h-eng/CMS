import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";
import Cardimg from "../../../assets/images/Cardimage.png";

const featuredEvents = [
  {
    id: 1,
    badge: "TRENDING NOW",
    title: "International Film Festival 2024",
    description: "Celebrating cinematic excellence from independent...",
    image: Cardimg,
  },
  {
    id: 2,
    badge: "BEST SELLER",
    title: "Cybersecurity World Summit",
    description: "Deep dive into the future of digital defense and cloud...",
    image: Cardimg,
  },
  {
    id: 3,
    badge: "ELITE ACCESS",
    title: "Soul & Jazz Night",
    description: "An intimate residence of smooth music and vibes...",
    image: Cardimg,
  },
  {
    id: 4,
    badge: "NEW EVENT",
    title: "Tech Leaders Conference",
    description: "Meet innovators, founders, and industry leaders...",
    image: Cardimg,
  },
];

export default function Carousel() {
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
        {featuredEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <article className={styles.card}>
              <img src={event.image} alt={event.title} className={styles.image} />

              <div className={styles.overlay}></div>

              <div className={styles.content}>
                <span className={styles.badge}>{event.badge}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>

                <button className={styles.viewBtn} type="button">
                  View Event
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}