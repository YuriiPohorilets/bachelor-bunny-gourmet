import clsx from 'clsx';
import styles from './Button.module.scss';

interface IProps<T extends React.ElementType = 'button'> {
  component?: T;
  color?: 'primary' | 'accent';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = <T extends React.ElementType = 'button'>({
  component,
  color = 'primary',
  fullWidth,
  children,
  ...rest
}: IProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = component || 'button';
  const buttonClasses = clsx(styles.button, styles[color], fullWidth && styles.fullWidth);

  return (
    <Component className={buttonClasses} {...rest}>
      {children}
    </Component>
  );
};
