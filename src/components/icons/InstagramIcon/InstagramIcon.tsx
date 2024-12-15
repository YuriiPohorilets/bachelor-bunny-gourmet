type TypeProps = {
  color?: string;
};

export const InstagramIcon: React.FC<TypeProps> = ({ color = 'currentColor' }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.74887 1.79883C6.1707 1.79883 4.65713 2.4256 3.54098 3.54132C2.42483 4.65704 1.79748 6.17037 1.79688 7.74854V23.6205C1.79688 25.1991 2.42396 26.713 3.54018 27.8292C4.65639 28.9455 6.17031 29.5725 7.74887 29.5725H23.6209C25.199 29.5719 26.7124 28.9446 27.8281 27.8284C28.9438 26.7123 29.5706 25.1987 29.5706 23.6205V7.74854C29.57 6.17077 28.9429 4.65778 27.8273 3.54213C26.7116 2.42647 25.1986 1.79943 23.6209 1.79883H7.74887ZM25.3329 7.75769C25.3329 8.21234 25.1523 8.64838 24.8308 8.96987C24.5093 9.29136 24.0732 9.47197 23.6186 9.47197C23.1639 9.47197 22.7279 9.29136 22.4064 8.96987C22.0849 8.64838 21.9043 8.21234 21.9043 7.75769C21.9043 7.30303 22.0849 6.86699 22.4064 6.5455C22.7279 6.22401 23.1639 6.0434 23.6186 6.0434C24.0732 6.0434 24.5093 6.22401 24.8308 6.5455C25.1523 6.86699 25.3329 7.30303 25.3329 7.75769ZM15.6872 10.9303C14.4262 10.9303 13.217 11.4312 12.3254 12.3228C11.4338 13.2144 10.9329 14.4236 10.9329 15.6845C10.9329 16.9455 11.4338 18.1547 12.3254 19.0463C13.217 19.9379 14.4262 20.4388 15.6872 20.4388C16.9481 20.4388 18.1573 19.9379 19.0489 19.0463C19.9405 18.1547 20.4414 16.9455 20.4414 15.6845C20.4414 14.4236 19.9405 13.2144 19.0489 12.3228C18.1573 11.4312 16.9481 10.9303 15.6872 10.9303ZM8.64487 15.6845C8.64487 13.8174 9.38659 12.0268 10.7068 10.7065C12.0271 9.38625 13.8178 8.64454 15.6849 8.64454C17.552 8.64454 19.3427 9.38625 20.6629 10.7065C21.9832 12.0268 22.7249 13.8174 22.7249 15.6845C22.7249 17.5517 21.9832 19.3423 20.6629 20.6626C19.3427 21.9828 17.552 22.7245 15.6849 22.7245C13.8178 22.7245 12.0271 21.9828 10.7068 20.6626C9.38659 19.3423 8.64487 17.5517 8.64487 15.6845Z"
        fill={color}
      />
    </svg>
  );
};
