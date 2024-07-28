import cx from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...rest }: Props) => (
  <button
    {...rest}
    className={cx(
      'h-10 bg-secondary text-white rounded text-base font-medium',
      className
    )}
  >
    {children}
  </button>
);
