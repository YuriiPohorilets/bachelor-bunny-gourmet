import clsx from 'clsx';
import styles from './Quote.module.scss';

interface IProps {
  align?: 'start' | 'center' | 'end';
  content: string;
  component?: React.ElementType;
  className?: string | string[];
}

export const Quote: React.FC<IProps> = ({
  content,
  align = 'start',
  component: Component = 'p',
  className,
}) => {
  return (
    <Component className={clsx(styles.content, styles[align], className)}>{content}</Component>
  );
};
