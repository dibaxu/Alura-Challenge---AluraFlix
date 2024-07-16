import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='flex justify-between items-center w-full px-8 py-4  min-h-32 bg-gray-800 border-b-2 border-blue-600'>
      <div>
        <img src='/public/Logo.svg' alt='AluraFlix' className='max-w-36' />
      </div>
      <div className='flex gap-2'>
        <Link to='/'>
          <Button variant='default' size='lg'>
            Home
          </Button>
        </Link>
        <Link to='/upload'>
          <Button variant='secondary' size='lg'>
            Subir Video
          </Button>
        </Link>
      </div>
    </header>
  );
}
