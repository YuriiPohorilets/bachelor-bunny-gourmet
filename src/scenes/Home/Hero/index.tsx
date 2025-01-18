import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { CrownIcon } from '@/components/icons';
import { Container, IconWrapper, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import Slide1Img from '@/assets/images/home/hero/slide-1.jpg';
import Slide2Img from '@/assets/images/home/hero/slide-2.jpg';
import { content } from '@/constants/main-page-content';
import styles from './index.module.scss';

export const Hero = () => {
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
          <SwiperSlide className="swiper-no-swiping">
            <Image alt="Slide 1" src={Slide1Img} width={1920} height={1080} priority={true} />
          </SwiperSlide>

          <SwiperSlide className="swiper-no-swiping">
            <Image alt="Slide 2" src={Slide2Img} width={1920} height={1080} priority={true} />
          </SwiperSlide>
        </Swiper>
      </div>

      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.titleWrapper}>
                <IconWrapper className={styles.iconWrapper}>
                  <CrownIcon />
                </IconWrapper>

                <h1 className={styles.title}>
                  {content.hero.title.map((text, index) => (
                    <span key={index}>{text}</span>
                  ))}
                </h1>
              </div>

              <h2 className={styles.subtitle}>{content.hero.subtitle}</h2>
            </div>

            <div className={styles.benefitsWrapper}>
              <ul className={styles.benefits}>
                {content.hero.benefits.map((item, index) => (
                  <span key={index} className={styles.benefit}>
                    {item}
                  </span>
                ))}
              </ul>

              <div className={styles.buttonWrapper}>
                <Button fullWidth>MAKE AN ORDER</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
