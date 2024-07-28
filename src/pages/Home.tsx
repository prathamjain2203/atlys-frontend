import { useCallback, useState } from 'react';

//components
import { LoginForm } from '../components/LoginForm';
import { Modal } from '../components/Modal';
import { SignupForm } from '../components/SignupForm';
import { PostCreateForm } from '../components/PostCreateForm';
import { Post } from '../components/Post';

export const Home = () => {
  const [isLoginComponent, setIsLoginComponent] = useState<boolean>(true);

  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  const toggleForm = useCallback(
    () => setIsLoginComponent((prev) => !prev),
    []
  );

  const handleClose = useCallback(() => setShowAuthModal(false), []);

  const handleShow = useCallback(() => setShowAuthModal(true), []);

  return (
    <div className='bg-app min-h-screen text-white flex justify-center'>
      <div className='pt-14 text-left lg:w-1/2 w-5/6'>
        <h2 className='font-weight-medium text-3xl text-quaternary'>
          Hello Jane
        </h2>
        <p className='mt-3 text-tertiary'>
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <div className='mt-10'>
          <PostCreateForm handleShow={handleShow} />
          <Post
            handleShow={handleShow}
            author='Theresa Webb'
            content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
          />
          <Post
            handleShow={handleShow}
            author='Marvin McKinney'
            content='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
          />
        </div>
      </div>
      <Modal
        handleClose={handleClose}
        open={showAuthModal}
        className='lg:w-1/3 w-5/6 max-w-2xl	'
      >
        {isLoginComponent ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <SignupForm toggleForm={toggleForm} />
        )}
      </Modal>
    </div>
  );
};
