type PropsType = {
  color?: string;
};

export const Envelope: React.FC<PropsType> = ({ color = 'currentColor' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M1.46946 4.84034L7.86676 8.03899L14.2641 4.8403C14.2159 4.00002 13.5192 3.3335 12.6668 3.3335H3.0668C2.21441 3.3335 1.5177 4.00004 1.46946 4.84034Z"
        fill={color}
      />
      <path
        d="M14.2668 6.62782L7.86676 9.82784L1.4668 6.62786V11.3335C1.4668 12.2172 2.18314 12.9335 3.0668 12.9335H12.6668C13.5505 12.9335 14.2668 12.2172 14.2668 11.3335V6.62782Z"
        fill={color}
      />
    </svg>
  );
};
