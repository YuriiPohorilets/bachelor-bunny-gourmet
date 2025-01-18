import { Collapse } from '@/components/layout';
import styles from './ReadMoreWrapper.module.scss';

interface IProps extends React.PropsWithChildren {
  collapseContent: React.ReactNode;
}

export const ReadMoreWrapper: React.FC<IProps> = ({ children, collapseContent }) => {
  return (
    <div className={styles.wrapper}>
      <Collapse></Collapse>
    </div>
  );
};
