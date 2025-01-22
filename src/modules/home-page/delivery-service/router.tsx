import Image from 'next/image';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { IDeliveryServiceInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Link } from '@/components/ui';
import { PagePath } from '@/types';
import styles from './index.module.scss';

export interface IProps {
  interactor: IDeliveryServiceInteractor;
}

export const DeliveryServiceRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="service-delivery">
      <div className={styles.sliderWrapper}>
        <Swiper
          effect={'fade'}
          speed={1600}
          autoplay={{ delay: 3200 }}
          modules={[Autoplay, Pagination, EffectFade]}
          loop={true}
          className={styles.slider}
        >
          {interactor.slides.map(slide => (
            <SwiperSlide key={slide.id} className="swiper-no-swiping">
              <Image alt={slide.alt} src={slide.src} width={slide.width} height={slide.height} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className={clsx(styles.title, interactor.matches.isDesktop && 'hidden')}>
              {interactor.content.title}
            </h2>

            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>{interactor.content.description}</p>

              <Link href={PagePath.Delivery}>
                {interactor.matches.isDesktop ? 'In-Home Executive Delivery' : 'more'}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
