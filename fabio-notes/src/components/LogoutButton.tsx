'use client';

import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import router from 'next/router';
import { logOutAction } from '@/app/actions/users';

function LogOutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    const {errorMessage} = await logOutAction();


    if (!errorMessage) {
      toast.success('Logged out successfully');

      router.push('/');
    } else {
      toast.error(errorMessage);
    }

    // signOut();
    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center gap-2"
    >
      {loading ? <Loader2 className="animate-spin" /> : 'Log out'}
    </Button>
  );
}

export default LogOutButton;
