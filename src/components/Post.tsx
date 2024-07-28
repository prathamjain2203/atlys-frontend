import { Avatar } from '../icons/Avatar';
import { Emoji } from '../icons/Emoji';
import { Message } from '../icons/Message';
import { Button } from './Button';

type Props = {
  content: string;
  author: string;
  handleShow: () => void;
};

export const Post = ({ content, author, handleShow }: Props) => (
  <div className='py-6 px-5 bg-primary border-2 border-secondary rounded-lg mt-4'>
    <div className='flex justify-between items-center flex-wrap'>
      <div className='flex gap-4 flex-wrap items-center'>
        <Avatar />
        <div className='font-medium'>
          <p className='text-secondary text-base'>{author}</p>
          <p className='text-tertiary text-sm'>5mins ago</p>
        </div>
      </div>
      <Button onClick={handleShow} className='!bg-transparent !text-secondary'>
        . . .
      </Button>
    </div>
    <div className='p-4 bg-tertiary rounded-lg mt-4 flex gap-4 items-start w-full mt-6'>
      <Emoji />
      <p className='text-base font-normal text-tertiary flex-1'>{content}</p>
    </div>
    <div className='flex gap-2 flex-wrap mt-3.5'>
      <Message />
      <p className='text-sm font-medium text-tertiary'>24 comments</p>
    </div>
  </div>
);
