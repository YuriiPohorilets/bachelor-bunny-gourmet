import { IFormInteractor } from './interactor';
import styles from './index.module.scss';
import { TextField } from '@/components/ui';

export interface IProps {
  interactor: IFormInteractor;
}

export const FormRouter: React.FC<IProps> = ({ interactor }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{interactor.content.title}</h1>

        <TextField />
      </div>

      <div className={styles.formWrapper}></div>
    </div>
  );
};
