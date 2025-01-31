import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { IHeroInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { SwiperPagination } from '@/components/common';
import styles from './index.module.scss';
import { Button } from '@/components/ui';

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
          pagination={{ el: '#hero-pagination', clickable: true }}
          modules={[EffectFade, Pagination, Autoplay]}
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
          <div className={styles.content}>
            <h1 className={styles.title}>{interactor.content.title}</h1>

            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>{interactor.content.description}</p>

              <div className={styles.labelWrapper}>
                <span className={styles.label}>{interactor.content.label}</span>
              </div>

              <Button fullWidth>{interactor.content.buttonLabel}</Button>
            </div>
          </div>

          <SwiperPagination id="hero-pagination" className={styles.pagination} />
        </div>
      </Container>
    </Section>
  );
};
