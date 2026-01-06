import Link from 'next/link';
import { LogIn, LogOut, User } from 'lucide-react';

import { auth, signOut } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export async function UserButton() {
  const session = await auth();

  if (!session?.user) {
    return (
      <Button variant="ghost" size="sm" asChild>
        <Link href="/login">
          <LogIn className="mr-2 h-4 w-4" />
          Sign in
        </Link>
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 text-sm">
        {session.user.image ? (
          <img
            src={session.user.image}
            alt={session.user.name || 'User'}
            className="h-6 w-6 rounded-full"
          />
        ) : (
          <User className="h-6 w-6 rounded-full bg-muted p-1" />
        )}
        <span className="hidden text-muted-foreground sm:inline">
          {session.user.name?.split(' ')[0]}
        </span>
      </div>
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/login' });
        }}
      >
        <Button variant="ghost" size="sm" type="submit">
          <LogOut className="h-4 w-4" />
          <span className="sr-only">Sign out</span>
        </Button>
      </form>
    </div>
  );
}
