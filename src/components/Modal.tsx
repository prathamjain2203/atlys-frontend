import cx from 'classnames';
import React from 'react';

import { Close } from '../icons/Close';
import { Button } from './Button';

type Props = {
  className?: string;
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
};

export const Modal = ({ className, children, open, handleClose }: Props) =>
  open ? (
    <div className='bg-black/[0.5] h-full w-full z-50 fixed left-0 top-0 flex items-center justify-center'>
      <div
        className={cx(
          'relative z-2 flex items-center justify-center',
          className
        )}
      >
        <Button
          onClick={handleClose}
          className='!bg-app cursor-pointer absolute right-6 top-6 flex items-center justify-center rounded-full bg-app h-8 w-8'
        >
          <Close />
        </Button>
        {children}
      </div>
    </div>
  ) : null;
