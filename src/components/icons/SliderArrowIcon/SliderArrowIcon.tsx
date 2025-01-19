interface IProps {
  color?: string;
}

export const SliderArrowIcon: React.FC<IProps> = ({ color = 'currentColor' }) => {
  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M46 64.8327L110.5 20.6654L55 64.8327L110.5 109L46 64.8327Z" fill={color} />
      </g>
    </svg>
  );
};
