import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image'

import 'swiper/css';
import styles from '@/styles/components/TopRanked.module.css'

const TopRanked = ({ data }) => {
  const ref = useRef(null);

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  }

  return (
    <section className={styles.TopRanked}>
      <h2>Les 10 meilleurs films</h2>
      <article>
        <button onClick={goPrev}>
          <Image src='/images/sliderpreviousarrow.svg' alt='silder previous arrow' width={25} height={15} />
        </button>
        <section>
          <Swiper
            ref={ref}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }}
          >
            {data.map((movie, index) => {
              if (index < 10) {
                return (
                  <SwiperSlide>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '16rem',
                      }}
                    >
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie image' width={138} height={200} />
                      <h3>{movie.title}</h3>
                      <span>{movie.release_date && data[0].release_date.split('-')[0]}</span>
                    </div>
                  </SwiperSlide>
                )
              }
            })}
          </Swiper>
        </section>
        <button onClick={goNext}>
          <Image src='/images/slidernextarrow.svg' alt='silder next arrow' width={25} height={15} />
        </button>
      </article>
    </section>
  )
}

export default TopRanked