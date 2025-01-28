import Image from 'next/image';

import { IOurTeamInteractor } from './interactor';
import { Section } from '@/components/layout';
import styles from './index.module.scss';

export interface IProps {
  interactor: IOurTeamInteractor;
}

export const OurTeamRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <Section id="our-team" className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{interactor.content.title}</h2>

        <div className={styles.imgWrapper}>
          <Image
            alt={interactor.content.image.alt}
            src={interactor.content.image.src}
            width={interactor.content.image.width}
            height={interactor.content.image.height}
          />
        </div>
      </div>
    </Section>
  );
};
