import clsx from 'clsx';
import styles from './Button.module.scss';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'accent';
  fullWidth?: boolean;
  component?: React.ElementType;
}

export const Button: React.FC<IProps> = ({
  children,
  color = 'primary',
  fullWidth,
  component: Component = 'button',
  ...rest
}) => {
  const buttonClasses = clsx(styles.button, styles[color], fullWidth && styles.fullWidth);

  return (
    <Component {...rest} className={buttonClasses}>
      {children}
    </Component>
  );
};
