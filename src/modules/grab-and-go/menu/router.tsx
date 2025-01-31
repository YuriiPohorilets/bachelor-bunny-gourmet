import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { IMenuInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { SwiperNavigationButton } from '@/components/common';
import styles from './index.module.scss';

export interface IProps {
  interactor: IMenuInteractor;
}

export const MenuRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="menu" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <h2 className={styles.title}>{interactor.content.title}</h2>

            <div className={styles.sliderWrapper}>
              <Swiper
                speed={1600}
                spaceBetween={10}
                centeredSlides={true}
                grabCursor
                rewind={true}
                slidesPerView={'auto'}
                modules={[]}
                breakpoints={{
                  1280: { spaceBetween: 30 },
                }}
                onSwiper={swiper => (interactor.swiperRef.current = swiper)}
                className={styles.slider}
              >
                {interactor.slides.map(slide => (
                  <SwiperSlide key={slide.id} className={styles.slide}>
                    <Image alt={slide.name} src={slide.image} width={1024} height={1024} />

                    <div className={styles.thumb}>
                      <span className={styles.name}>{slide.name}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className={styles.controlsWrapper}>
                <SwiperNavigationButton
                  direction="prev"
                  size={interactor.matches.isDesktop ? 'small' : 'medium'}
                  onClick={interactor.handlePrevSlide}
                />

                <span className={styles.label}>{interactor.content.label}</span>

                <SwiperNavigationButton
                  direction="next"
                  size={interactor.matches.isDesktop ? 'small' : 'medium'}
                  onClick={interactor.handleNextSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
