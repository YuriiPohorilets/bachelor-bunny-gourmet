import { IFooterInteractor } from './interactor';
import { Container } from '@/components/layout';
import styles from './index.module.scss';

export interface IProps {
  interactor: IFooterInteractor;
}

export const FooterRouter: React.FC<IProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>footer</div>
      </Container>
    </footer>
  );
};
