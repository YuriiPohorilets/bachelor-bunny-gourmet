import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ITeamInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Rating, SwiperNavigationButton } from '@/components/common';
import styles from './index.module.scss';

export interface IProps {
  interactor: ITeamInteractor;
}

export const TeamRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="team" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          {interactor.matches.isDesktop && (
            <p className={styles.description}>{interactor.content.description}</p>
          )}

          <div className={styles.content}>
            {!interactor.matches.isDesktop && (
              <h2 className={styles.title}>{interactor.content.title}</h2>
            )}

            <div className={styles.sliderWrapper}>
              <Swiper
                speed={1600}
                spaceBetween={10}
                centeredSlides={true}
                grabCursor
                rewind={true}
                slidesPerView={'auto'}
                modules={[]}
                breakpoints={{ 1280: { spaceBetween: 30 } }}
                onSwiper={swiper => (interactor.swiperRef.current = swiper)}
                className={styles.slider}
              >
                {interactor.slides.map(slide => (
                  <SwiperSlide key={slide.id} className={styles.slide}>
                    <Image alt={slide.name} src={slide.image} width={1024} height={1024} />

                    <div className={styles.thumb}>
                      <div className={styles.nameWrapper}>
                        <span className={styles.name}>{slide.name}</span>

                        {interactor.matches.isDesktop && <Rating rate={slide.rate} />}
                      </div>

                      <p className={styles.comment}>{slide.comment}</p>
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

                {interactor.matches.isDesktop && (
                  <h2 className={styles.title}>{interactor.content.title}</h2>
                )}

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
