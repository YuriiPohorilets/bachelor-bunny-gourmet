import styles from './Button.module.scss';

type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  component?: React.ElementType;
};

export const Button: React.FC<PropsType> = ({
  component: Component = 'button',
  children,
  ...rest
}) => {
  return (
    <Component {...rest} className={styles.button}>
      {children}
    </Component>
  );
};
