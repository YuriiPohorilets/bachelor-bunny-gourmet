import clsx from 'clsx';
import styles from './Button.module.scss';

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'accent';
  fullWidth?: boolean;
  component?: React.ElementType;
};

export const Button: React.FC<PropsType> = ({
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
