'use client';

import { SignInButton, SignedIn, SignedOut, UserButton as ClerkUserButton } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';

import { Button } from '@/components/ui/button';

// Check if Clerk is properly configured
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isClerkConfigured = publishableKey?.startsWith('pk_');

export function UserButton() {
  // If Clerk isn't configured, show nothing or a placeholder
  if (!isClerkConfigured) {
    return null;
  }

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="ghost" size="sm">
            <LogIn className="mr-2 h-4 w-4" />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <ClerkUserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: 'h-8 w-8',
            },
          }}
        />
      </SignedIn>
    </>
  );
}
