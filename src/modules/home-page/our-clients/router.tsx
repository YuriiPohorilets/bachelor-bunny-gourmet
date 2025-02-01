import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, MotionConfig } from 'motion/react';
import 'swiper/css';

import { IOurClientsInteractor } from './interactor';
import { Container, IconWrapper, Section } from '@/components/layout';
import { Quote, Rating, SwiperNavigationButton } from '@/components/common';
import { CrownIcon } from '@/components/icons';
import { animation } from '@/utils/framer-animation';
import styles from './index.module.scss';

export interface IProps {
  interactor: IOurClientsInteractor;
}

export const OurClientsRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="our-slients" className={styles.section}>
      <Container>
        <MotionConfig transition={{ duration: 0.8, ease: 'easeInOut' }}>
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

              <motion.div {...animation.swipe([50, 50])} viewport={{ amount: 0.7 }}>
                <Quote align="center" content={interactor.content.quote} className={styles.quote} />
              </motion.div>
            </div>

            <div className={styles.clients}>
              <motion.h2 {...animation.slide([-50, -50])} className={styles.title}>
                {interactor.content.title}
              </motion.h2>

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
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      >
                        <Image alt={slide.name} src={slide.image} width={1024} height={1024} />

                        <div className={styles.thumb}>
                          <div className={styles.nameWrapper}>
                            <span className={styles.name}>{slide.name}</span>

                            {interactor.matches.isDesktop && <Rating rate={slide.rate} />}
                          </div>

                          <p className={styles.comment}>{slide.comment}</p>
                        </div>
                      </motion.div>
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
        </MotionConfig>
      </Container>
    </Section>
  );
};
