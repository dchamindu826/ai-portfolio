// src/components/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import styles from './Testimonials.module.css';
import { Autoplay } from 'swiper/modules';

const testimonialsData = [
  { id: 1, name: "Alex, Lead Developer", text: "His ability to integrate complex AI models is second to none.", img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, name: "Samantha, UI/UX Designer", text: "Always brings innovative ideas to the table. A pleasure to collaborate with.", img: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 3, name: "David, Project Manager", text: "Delivers results on time, every time. A true professional.", img: 'https://randomuser.me/api/portraits/men/9.jpg' },
  { id: 4, name: "Maria, Data Scientist", text: "His understanding of data pipelines and AI is truly impressive.", img: 'https://randomuser.me/api/portraits/women/14.jpg' },
  { id: 5, name: "Leo, Backend Engineer", text: "The APIs he builds for AI services are clean, efficient, and scalable.", img: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { id: 6, name: "Chloe, QA Specialist", text: "The quality of his work consistently exceeds our expectations.", img: 'https://randomuser.me/api/portraits/women/24.jpg' },
  { id: 7, name: "Ben, DevOps Engineer", text: "Deployment of his AI applications is always a smooth process.", img: 'https://randomuser.me/api/portraits/men/29.jpg' },
  { id: 8, name: "Isabelle, Marketing Lead", text: "The AI tools he built have significantly boosted our campaign effectiveness.", img: 'https://randomuser.me/api/portraits/women/34.jpg' },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.sectionTitle}>What My Colleagues Say</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className={styles.mySwiper}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className={styles.swiperSlide}>
            <div className={styles.testimonialCard}>
              <img src={testimonial.img} alt={testimonial.name} className={styles.profilePic} />
              <div className={styles.cardContent}>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <h4 className={styles.testimonialName}>- {testimonial.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;