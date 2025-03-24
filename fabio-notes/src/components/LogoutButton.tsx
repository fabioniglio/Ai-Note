'use client';

import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import router from 'next/router';

function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    const errorMessage = null;

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

export default LogoutButton;
