type TypeProps = {
  color?: string;
};

export const CrownIcon: React.FC<TypeProps> = ({ color = 'currentColor' }) => {
  const id = Math.random() * 100_000;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="33" viewBox="0 0 42 33" fill="none">
      <g clip-path={`url(#${id})`}>
        <path
          d="M6.76483 27.6264C6.57952 27.0217 6.3942 26.424 6.21575 25.8262C5.60491 23.7582 4.97347 21.6969 4.4038 19.622C3.80668 17.444 3.36055 15.2316 2.9762 13.0055C2.83207 12.1604 2.70166 11.3085 2.5438 10.4634C2.42712 9.84502 2.10454 9.3572 1.53487 9.0755C0.347492 8.48462 0.148451 7.22729 0.718119 6.15546C1.06816 5.49588 1.60351 5.06989 2.37908 5.04241C3.37428 5.00806 4.21162 5.68138 4.45184 6.67763C4.6097 7.34409 4.50675 7.96932 4.10181 8.53272C3.97826 8.69761 3.84786 8.86938 3.71745 9.04115C3.54587 9.26101 3.51841 9.48774 3.66255 9.74196C4.6097 11.4184 5.54313 13.1086 6.50402 14.7782C7.56099 16.5989 8.85133 18.2547 10.2927 19.78C10.6633 20.1717 11.1163 20.4671 11.6104 20.6732C12.0085 20.8381 12.3929 20.79 12.6949 20.4877C12.99 20.1923 13.2645 19.8762 13.5116 19.5396C14.8431 17.7532 15.8795 15.795 16.7718 13.7544C17.918 11.1436 19.0367 8.51898 20.1555 5.90125C20.3408 5.46152 20.4025 5.5371 19.8603 5.26227C19.0161 4.83629 18.5906 4.13548 18.3778 3.2629C18.1856 2.4659 18.4053 1.75822 18.9063 1.13299C19.476 0.439051 20.1829 -0.0144141 21.1095 -0.000672719C21.7958 0.0130686 22.3312 0.384086 22.8253 0.83068C24.0333 1.93686 23.7656 4.31412 22.4273 5.13173C22.3861 5.15921 22.3449 5.18669 22.3037 5.22105C21.9262 5.50962 21.8507 5.73635 22.0292 6.18294C22.3312 6.92498 22.64 7.66701 22.9626 8.3953C23.9715 10.6901 24.9599 12.9918 26.01 15.266C26.6826 16.7294 27.5268 18.1105 28.4397 19.4434C28.7073 19.835 29.0574 20.1648 29.4005 20.5014C29.7368 20.8312 30.1281 20.8519 30.533 20.6183C31.137 20.2747 31.6929 19.8625 32.1665 19.3403C34.1569 17.1279 35.7492 14.6408 37.1631 12.0368C37.5543 11.3153 37.9181 10.5733 38.2956 9.83815C38.5152 9.39842 38.4809 9.16482 38.1446 8.80067C37.8357 8.46401 37.5681 8.10674 37.472 7.65327C37.2592 6.6158 37.8975 5.52336 38.927 5.16608C40.2379 4.71262 41.5763 5.67451 41.5969 7.06926C41.6038 7.79068 41.3841 8.40217 40.8968 8.91748C40.787 9.03428 40.6154 9.11673 40.4576 9.15795C40.0801 9.25414 39.8193 9.46713 39.7301 9.85189C39.3663 11.336 38.9819 12.8132 38.6525 14.3041C37.925 17.5608 37.2592 20.8381 36.3464 24.0467C36.0993 24.9262 35.7973 25.7919 35.5228 26.6713C35.4747 26.8294 35.4267 26.9874 35.3855 27.1523C35.2963 27.4821 35.1247 27.6264 34.7815 27.6264C34.0471 27.6332 33.3059 27.6264 32.5646 27.6264C31.5282 27.6264 30.4987 27.6264 29.4623 27.6264C22.0017 27.6264 14.548 27.6264 7.08741 27.6264C6.97074 27.6264 6.87465 27.6264 6.76483 27.6264Z"
          fill={color}
        />
        <path
          d="M6.73181 32.8351C6.73181 31.3991 6.73181 29.9906 6.73181 28.5615C16.224 28.5615 25.7093 28.5615 35.2083 28.5615C35.2083 29.9838 35.2083 31.406 35.2083 32.8351C25.7093 32.8351 16.2308 32.8351 6.73181 32.8351Z"
          fill={color}
        />
        <path
          d="M31.4999 9.7425C31.493 10.0448 31.3352 10.4158 31.0606 10.7456C30.9508 10.8762 30.8341 11.0136 30.7174 11.1372C30.5115 11.3571 30.4978 11.5976 30.6419 11.8518C30.9508 12.4015 31.2528 12.9511 31.5616 13.4939C32.0352 14.3184 32.5157 15.1291 32.9892 15.9536C33.2501 16.4139 33.2363 16.6063 32.8794 16.9773C32.2205 17.6575 31.5616 18.3377 30.8822 19.0042C30.4978 19.3821 30.0448 19.3821 29.6124 19.0454C28.48 18.1797 27.5534 17.1216 26.7504 15.9536C26.6817 15.8574 26.6817 15.7887 26.7366 15.6788C27.4504 14.3939 28.1642 13.1023 28.878 11.8106C29.0702 11.4602 29.0496 11.3296 28.7408 11.0685C28.1025 10.5258 27.8485 9.78372 28.075 9.09665C28.329 8.32713 29.2075 7.75 29.9419 7.87367C30.8204 8.02482 31.4999 8.78747 31.4999 9.7425Z"
          fill={color}
        />
        <path
          d="M12.2848 11.5342C12.6349 12.1388 13.0055 12.7846 13.3761 13.4236C13.8428 14.2206 14.3164 15.0176 14.7763 15.8215C15.0783 16.3505 15.0645 16.7078 14.6459 17.1406C14.0007 17.8071 13.3349 18.4461 12.6623 19.0782C12.326 19.3942 11.9348 19.3599 11.5573 19.0919C10.4248 18.2949 9.55317 17.2506 8.76387 16.1238C8.57169 15.8489 8.56483 15.636 8.72955 15.3611C9.34726 14.3237 9.94439 13.2793 10.5552 12.235C10.9053 11.6372 10.871 11.2868 10.4042 10.7715C9.82084 10.1188 9.81398 9.11567 10.3905 8.4767C11.0014 7.80337 11.9554 7.67283 12.6417 8.16752C13.4516 8.75153 13.5752 10.1325 12.8888 10.8952C12.6898 11.1013 12.4976 11.3074 12.2848 11.5342Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id={id.toString()}>
          <rect width="41.1671" height="32.835" fill={color} transform="translate(0.416504)" />
        </clipPath>
      </defs>
    </svg>
  );
};
