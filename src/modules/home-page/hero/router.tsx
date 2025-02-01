import Image from 'next/image';
import { motion, MotionConfig } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { IHeroInteractor } from './interactor';
import { Container, IconWrapper, Section } from '@/components/layout';
import { CrownIcon } from '@/components/icons';
import { Button } from '@/components/ui';
import styles from './index.module.scss';

export interface IProps {
  interactor: IHeroInteractor;
}

export const HeroRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="hero" className={styles.section}>
      <div className={styles.sliderWrapper}>
        <Swiper
          effect={'fade'}
          speed={1600}
          autoplay={{ delay: 3200 }}
          modules={[EffectFade, Autoplay]}
          className={styles.slider}
        >
          {interactor.slides.map(slide => (
            <SwiperSlide key={slide.id} className="swiper-no-swiping">
              <Image
                alt={slide.alt}
                src={slide.src}
                width={slide.width}
                height={slide.height}
                priority={true}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Container className={styles.container}>
        <MotionConfig transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <div className={styles.wrapper}>
            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <div className={styles.titleWrapper}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{
                      opacity: [0, 1],
                      scale: [0.8, 1.1, 1],
                      transition: { delay: 0.8, duration: 1.1, ease: 'easeInOut' },
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    viewport={{ amount: 0.7, once: true }}
                    className={styles.iconWrapper}
                  >
                    <IconWrapper>
                      <CrownIcon />
                    </IconWrapper>
                  </motion.div>

                  <motion.h1 className={styles.title}>
                    {interactor.content.title.map((text, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                        whileInView={{ opacity: [0, 1], x: [index === 0 ? -30 : 30, 0] }}
                        exit={{ opacity: 0, x: index === 0 ? 30 : -30 }}
                        viewport={{ amount: 0.7, once: true }}
                      >
                        {text}
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>

                <motion.h2
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0, 1],
                    transition: { delay: 0.8, duration: 0.8, ease: 'easeInOut' },
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  viewport={{ amount: 0.7, once: true }}
                  className={styles.subtitle}
                >
                  {interactor.content.subtitle}
                </motion.h2>
              </div>

              <div className={styles.benefitsWrapper}>
                <ul className={styles.benefits}>
                  {interactor.content.benefits.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{
                        opacity: [0, 1],
                        y: [30, 0],
                        transition: { delay: 0.8 + 0.1 * index, duration: 0.8, ease: 'easeInOut' },
                      }}
                      exit={{ opacity: 0, y: 30 }}
                      viewport={{ amount: 0.7, once: true }}
                      className={styles.benefit}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: [0, 1], x: [30, 0] }}
                  exit={{ opacity: 0, x: -30 }}
                  viewport={{ amount: 0.7, once: true }}
                  className={styles.buttonWrapper}
                >
                  <Button fullWidth>MAKE AN ORDER</Button>
                </motion.div>
              </div>
            </div>
          </div>
        </MotionConfig>
      </Container>
    </Section>
  );
};
