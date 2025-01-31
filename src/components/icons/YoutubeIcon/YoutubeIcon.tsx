interface IProps {
  color?: string;
}

export const YoutubeIcon: React.FC<IProps> = ({ color = 'currentColor' }) => {
  const id = Math.random() * 100_000;

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id={`${id}`} maskUnits="userSpaceOnUse" x="3" y="5" width="26" height="22">
        <path
          d="M16 6.66699C28 6.66699 28 6.66699 28 16.0003C28 25.3337 28 25.3337 16 25.3337C4 25.3337 4 25.3337 4 16.0003C4 6.66699 4 6.66699 16 6.66699Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13.333 11.334L21.333 16.0007L13.333 20.6673V11.334Z" fill="black" />
      </mask>
      <g mask={`url(#${id})`}>
        <path d="M32 0H0V32H32V0Z" fill={color} />
      </g>
    </svg>
  );
};
