import Image from 'next/image';
import { motion, MotionConfig } from 'motion/react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { IDeliveryServiceInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import { Link, Paragraph } from '@/components/ui';
import { PagePath } from '@/types';
import { SwiperPagination } from '@/components/common';
import styles from './index.module.scss';
import { animation } from '@/utils/framer-animation';

export interface IProps {
  interactor: IDeliveryServiceInteractor;
}

export const DeliveryServiceRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="service-delivery" className={styles.section}>
      <div className={styles.sliderWrapper}>
        <Swiper
          effect={'fade'}
          speed={1600}
          autoplay={{ delay: 3200 }}
          modules={[Autoplay, Pagination, EffectFade]}
          pagination={{ el: '#deliver-service-pagination', clickable: true }}
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
        <MotionConfig transition={{ duration: 0.8, ease: 'easeInOut' }}>
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <h2 className={clsx(styles.title, interactor.matches.isDesktop && 'hidden')}>
                {interactor.content.title}
              </h2>

              <div className={styles.descriptionWrapper}>
                <motion.div {...animation.slide([-30, 30])} viewport={{ amount: 0.7 }}>
                  <Paragraph
                    capitalize={interactor.matches.isDesktop}
                    className={styles.description}
                  >
                    {interactor.content.description}
                  </Paragraph>
                </motion.div>

                <motion.div {...animation.slide([30, -30])} viewport={{ amount: 0.7 }}>
                  <Link
                    href={PagePath.Delivery}
                    aria-label="In-Home Executive Delivery"
                    className={styles.link}
                  >
                    {interactor.matches.isDesktop ? 'In-Home Executive Delivery' : 'more'}
                  </Link>
                </motion.div>
              </div>
            </div>

            <SwiperPagination id="deliver-service-pagination" className={styles.pagination} />
          </div>
        </MotionConfig>
      </Container>
    </Section>
  );
};
