interface IProps extends React.PropsWithChildren {
  background: string;
  className?: string;
}

export const BgWrapper: React.FC<IProps> = ({ children, background, className }) => {
  return (
    <div
      className={className}
      style={{
        background: background,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};
