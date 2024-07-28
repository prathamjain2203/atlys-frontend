import { useCallback, useState } from 'react';

//components
import { LoginForm } from '../components/LoginForm';
import { SignupForm } from '../components/SignupForm';
import { Logo } from '../icons/Logo';

export const Auth = () => {
  const [isLoginComponent, setIsLoginComponent] = useState<boolean>(true);

  const toggleForm = useCallback(
    () => setIsLoginComponent((prev) => !prev),
    []
  );

  return (
    <div className='bg-app flex flex-col items-center justify-center min-h-screen'>
      <Logo className='mb-12' />
      <div className='lg:w-1/3 w-5/6 max-w-2xl'>
        {isLoginComponent ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <SignupForm toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};
