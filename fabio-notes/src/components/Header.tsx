import Link from 'next/link';
import Image from 'next/image';
import { shadow } from '@/styles/utils';
import { Button } from '@/components/ui/button';
import DarkModeToggle from './DarkModeToggle';
import LogOutButton from './LogOutButton';
import { getUser } from '@/lib/server';

async function Header() {
  const user = await getUser();

  return (
    <header
      className="bg-popover flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <div className="flex items-center gap-2">
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/iconFabio.png"
            alt="Logo"
            height={60}
            width={60}
            className="rounded-full"
            priority
          />
        </Link>
        <h1 className="flex flex-col text-2xl leading-6 font-semibold">
          Fabio <span>Notes</span>
        </h1>
      </div>

      <div className="flex gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href={'/signup'}>Signup</Link>
            </Button>
            <Button asChild variant={'outline'}>
              <Link href={'/login'}>Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
