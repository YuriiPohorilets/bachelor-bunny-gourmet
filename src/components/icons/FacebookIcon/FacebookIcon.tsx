type IconProps = {
  color?: string;
};

export const FacebookIcon: React.FC<IconProps> = ({ color = 'currentColor' }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.6663 18.0003H21.9997L23.333 12.667H18.6663V10.0003C18.6663 8.62699 18.6663 7.33366 21.333 7.33366H23.333V2.85366C22.8983 2.79633 21.257 2.66699 19.5237 2.66699C15.9037 2.66699 13.333 4.87633 13.333 8.93366V12.667H9.33301V18.0003H13.333V29.3337H18.6663V18.0003Z"
        fill={color}
      />
    </svg>
  );
};
