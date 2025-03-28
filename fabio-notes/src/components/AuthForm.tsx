'use client';

import { useRouter } from 'next/navigation';
import { CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useTransition } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { createClient } from '@/app/auth/server';
import { toast } from 'sonner';
import { loginUserAction, signUpAction } from '@/app/actions/users';

type Props = {
  type: 'login' | 'signUp';
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === 'login';

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      let errorMessage;
      let title;
      let description;

      if (isLoginForm) {
        errorMessage = (await loginUserAction(email, password)).errorMessage;
        title = 'Login In';
        description = 'You have been logged in successfully';
      } else {
        errorMessage = (await signUpAction(email, password)).errorMessage;
        title = 'Sign Up';
        description = 'You have been signed up successfully';
      }

      if (!errorMessage) {
        toast.success(title, {
          description,
        });
        router.replace('/');
      } else {
        toast.error(errorMessage);
      }

      const supabase = await createClient();

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
      }
    });
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
