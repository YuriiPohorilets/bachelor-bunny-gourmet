import Image from 'next/image';
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
        <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.titleWrapper}>
                <IconWrapper className={styles.iconWrapper}>
                  <CrownIcon />
                </IconWrapper>

                <h1 className={styles.title}>
                  {interactor.content.title.map((text, index) => (
                    <span key={index}>{text}</span>
                  ))}
                </h1>
              </div>

              <h2 className={styles.subtitle}>{interactor.content.subtitle}</h2>
            </div>

            <div className={styles.benefitsWrapper}>
              <ul className={styles.benefits}>
                {interactor.content.benefits.map((item, index) => (
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
