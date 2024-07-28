import cx from 'classnames';
import {
  InputHTMLAttributes,
  ReactElement,
  useCallback,
  useState,
} from 'react';

//components
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  inputClassName?: string;
  extraEnhancer?: ReactElement;
  isPasswordField?: boolean;
  containerClassName?: string;
}

export const Input = ({
  label,
  labelClassName,
  placeholder,
  inputClassName,
  containerClassName,
  extraEnhancer,
  isPasswordField,
  type,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = useCallback(() => setShowPassword(true), []);

  const handleHidePassword = useCallback(() => setShowPassword(false), []);

  const inputType = type
    ? type
    : !isPasswordField
    ? 'text'
    : showPassword
    ? 'text'
    : 'password';

  return (
    <div className={cx('flex flex-col gap-2.5 text-left', containerClassName)}>
      {label ? (
        <label className={cx('text-secondary text-sm', labelClassName)}>
          {label}
        </label>
      ) : null}
      <div className='relative w-full'>
        <input
          {...rest}
          type={inputType}
          className={cx(
            'w-full p-3 h-11 rounded border-[1.5px] border-secondary bg-transparent placeholder:text-base placeholder:text-tertiary placeholder:font-normal',
            inputClassName
          )}
          placeholder={placeholder}
        />
        {isPasswordField ? (
          <div className='absolute right-3 top-3'>
            {showPassword ? (
              <FiEyeOff onClick={handleHidePassword} />
            ) : (
              <FiEye onClick={handleShowPassword} />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
