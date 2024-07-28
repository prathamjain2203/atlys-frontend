type Props = {
  height?: string;
  width?: string;
  className?: string;
};

export const Post = ({ height = '48', width = '48', className }: Props) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='24' cy='24' r='24' fill='#27292D' />
    <path d='M15 33.26H33V15.26H15V33.26Z' fill='black' />
  </svg>
);
