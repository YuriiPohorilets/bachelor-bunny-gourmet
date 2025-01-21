import { IGrabAndGoInteractor } from './interactor';
import { Container, Section } from '@/components/layout';
import styles from './index.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export interface IProps {
  interactor: IGrabAndGoInteractor;
}

export const GrabAndGoRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="grab-and-go" className={styles.section}>
      <div className={styles.mediaWrapper}>
        {interactor.content.images.map(img => (
          <div key={img.id} className={clsx(styles.imageWrapper)}>
            <Image alt={img.alt} src={img.src} width={img.width} height={img.height} />
          </div>
        ))}
      </div>

      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{interactor.content.title}</h2>

          <div className={styles.contentWrapper}>
            <h3 className={clsx(styles.subtitle, interactor.matches.isDesktop && 'hidden')}>
              {interactor.content.subtitle}
            </h3>

            <p className={styles.description}>{interactor.content.description}</p>

            <button type="button" className={styles.link}>
              More
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
