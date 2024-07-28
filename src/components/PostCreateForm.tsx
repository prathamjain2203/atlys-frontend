import { Post } from '../icons/Post';
import { Button } from './Button';
import { Input } from './Input';

type Props = {
  handleShow: () => void;
};

export const PostCreateForm = ({ handleShow }: Props) => {
  return (
    <div className='py-6 px-5 bg-primary border-2 border-secondary rounded-lg flex justify-start flex-col'>
      <p className='text-secondary font-medium text-lg'>Create post</p>
      <div className='p-4 bg-tertiary rounded-lg mt-4 flex flex-wrap gap-4 items-center w-full'>
        <Post />
        <Input
          inputClassName='!border-none outline-none w-full'
          placeholder='How are you feeling today?'
          containerClassName='flex-1'
        />
      </div>
      <Button onClick={handleShow} className='w-28 mt-4 self-end'>
        Post
      </Button>
    </div>
  );
};
