'use client';

import { useRouter } from 'next/navigation';
// import { toast } from 'sonner';
import { CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useTransition } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

type Props = {
  type: 'login' | 'signUp';
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === 'login';

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log('form Submitted');
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        {' '}
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            id="password"
            name="password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            'Login'
          ) : (
            'Sign Up'
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link
            href={isLoginForm ? '/sign-up' : '/login'}
            className={`text-blue-500 underline ${isPending ? 'pointer-events-none' : ''}`}
          >
            {isLoginForm ? 'Sign Up' : 'Login'}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
