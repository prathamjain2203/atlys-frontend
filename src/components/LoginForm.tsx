import { useNavigate } from 'react-router';
import { useCallback } from 'react';

//components
import { Input } from './Input';
import { Button } from './Button';

//constants
import { ROUTE_MAP } from '../constants';

type Props = {
  toggleForm: () => void;
};

export const LoginForm = ({ toggleForm }: Props) => {
  const navigate = useNavigate();

  const handleNavigateToHome = useCallback(
    () => navigate(ROUTE_MAP.HOME),
    [navigate]
  );

  return (
    <div className='px-6 py-10 border-2 form-border-image bg-primary text-center text-white w-full'>
      <p className='text-primary font-medium text-sm'>WELCOME BACK</p>
      <p className='mt-2 font-semibold text-lg'>Log into your account</p>
      <form
        onSubmit={handleNavigateToHome}
        className='flex flex-col gap-4 mt-11'
      >
        <Input
          placeholder='Enter your email or username'
          label='Email or Username'
        />
        <Input
          isPasswordField={true}
          placeholder='Enter your password'
          label='Password'
        />
        <Button type='submit' className='mt-1 w-full'>
          Login now
        </Button>
      </form>
      <div className='flex items-center flex-wrap gap-1 mt-3'>
        <span className='text-tertiary'>Not registered yet?</span>
        <Button className='!bg-transparent text-secondary' onClick={toggleForm}>
          Register →
        </Button>
      </div>
    </div>
  );
};
