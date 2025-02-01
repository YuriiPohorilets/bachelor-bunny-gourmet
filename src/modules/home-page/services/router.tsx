import Image from 'next/image';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { IServicesInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { SwiperNavigationButton, SwiperPagination } from '@/components/common';
import { animation, duration, easing } from '@/utils/framer-animation';
import styles from './index.module.scss';

export interface IProps {
  interactor: IServicesInteractor;
}

export const ServicesRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="services" className={styles.section}>
      <div className={styles.sliderWrapper}>
        <Swiper
          effect={'fade'}
          speed={1600}
          autoplay={{ delay: 3200 }}
          modules={[Autoplay, Pagination, EffectFade]}
          pagination={{ el: '#services-pagination', clickable: true }}
          loop={true}
          onSlideChange={interactor.handleSlideChange}
          onSwiper={swiper => (interactor.swiperRef.current = swiper)}
          className={styles.slider}
        >
          {interactor.slides.map(slide => (
            <SwiperSlide key={slide.id} className="swiper-no-swiping">
              <Image alt={slide.alt} src={slide.src} width={slide.width} height={slide.height} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className={styles.labelWrapper}
      >
        <span className={styles.label}>Our proposal</span>
      </motion.div>

      <Container className={styles.container}>
        <MotionConfig transition={{ duration: duration.xl, ease: easing.common }}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.titleWrapper}>
                <AnimatePresence>
                  <motion.h2
                    key={interactor.slideIdx}
                    {...animation.fadeDown(['-100%', 0, '100%'])}
                    className={styles.title}
                  >
                    {interactor.content.title}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <SwiperPagination id="services-pagination" className={styles.pagination} />

              <div className={styles.controlsWrapper}>
                {interactor.matches.isDesktop && (
                  <SwiperNavigationButton
                    direction="prev"
                    size="large"
                    onClick={interactor.handlePrevSlide}
                  />
                )}

                <div className={styles.descriptionWrapper}>
                  <AnimatePresence>
                    <motion.p
                      key={interactor.slideIdx}
                      {...animation.fadeDown(['-100%', 0, '100%'])}
                      className={styles.description}
                    >
                      {interactor.content.description}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {interactor.matches.isDesktop && (
                  <SwiperNavigationButton
                    direction="next"
                    size="large"
                    onClick={interactor.handleNextSlide}
                  />
                )}
              </div>
            </div>
          </div>
        </MotionConfig>
      </Container>
    </Section>
  );
};
