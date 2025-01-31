import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { IOurClientsInteractor } from './interactor';
import { Container, IconWrapper, Section } from '@/components/layout';
import { Quote, Rating, SwiperNavigationButton } from '@/components/common';
import { CrownIcon } from '@/components/icons';
import styles from './index.module.scss';

export interface IProps {
  interactor: IOurClientsInteractor;
}

export const OurClientsRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="our-slients" className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.quoteWrapper}>
            {!interactor.matches.isDesktop && (
              <span className={styles.logo}>
                <IconWrapper className={styles.icon}>
                  <CrownIcon />
                </IconWrapper>

                <span className={styles.label}>BBG</span>
              </span>
            )}

            <Quote align="center" content={interactor.content.quote} className={styles.quote} />
          </div>

          <div className={styles.clients}>
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
