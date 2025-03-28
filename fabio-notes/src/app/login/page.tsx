//import AuthForm from '@/components/AuthForm';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

import { login, signup } from './actions'

function LoginPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
        {/* <AuthForm type="login" /> */}
        <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
      </Card>
    </div>
  );
}

export default LoginPage;
