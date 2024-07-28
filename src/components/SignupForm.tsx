import { useCallback } from 'react';
import { useNavigate } from 'react-router';

//components
import { Input } from './Input';
import { Button } from './Button';

//constants
import { ROUTE_MAP } from '../constants';

type Props = {
  toggleForm: () => void;
};

export const SignupForm = ({ toggleForm }: Props) => {
  const navigate = useNavigate();

  const handleNavigateToHome = useCallback(
    () => navigate(ROUTE_MAP.HOME),
    [navigate]
  );

  return (
    <div className='px-6 py-10 border-2 form-border-image bg-primary text-center text-white w-full'>
      <p className='text-primary font-medium text-sm'>SIGN UP</p>
      <p className='mt-2 font-semibold text-lg'>
        Create an account to continue
      </p>
      <form
        onSubmit={handleNavigateToHome}
        className='flex flex-col gap-4 mt-11'
      >
        <Input placeholder='Enter your email' label='Email' />
        <Input placeholder='Choose a preferred username' label='Username' />
        <Input
          isPasswordField={true}
          placeholder='Choose a strong password'
          label='Password'
        />
        <Button type='submit' className='mt-1 w-full'>
          Continue
        </Button>
      </form>
      <div className='flex items-center flex-wrap gap-1 mt-3'>
        <span className='text-tertiary'>Already have an account?</span>
        <Button className='!bg-transparent text-secondary' onClick={toggleForm}>
          Login →
        </Button>
      </div>
    </div>
  );
};
