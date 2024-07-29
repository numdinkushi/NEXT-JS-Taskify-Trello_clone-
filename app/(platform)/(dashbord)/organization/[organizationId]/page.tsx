import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import Form from './form';

const OrganizationIdPage = async () => {

  const boards = await db.board.findMany();
  return (
    <div className="flex flex-col space-y">
      <Form />
      {/* <form action={create}>
        <input
          id='title'
          name='title'
          required
          placeholder='Enter a board title'
          className='border-black border p-1'
        />
        <Button type='submit'>
          Submit
        </Button>
      </form> */}
      <div className="space-y-2">
        {
          boards.map((board) => (
            <div key={board.id}>
              <h3>{board.title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default OrganizationIdPage;