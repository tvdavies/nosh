'use client';

import { ClerkProvider } from '@clerk/nextjs';

// Only render ClerkProvider if a valid publishable key is set
// This allows builds to succeed without Clerk configuration
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const isValidKey = publishableKey?.startsWith('pk_');

export function ClerkProviderWrapper({ children }: { children: React.ReactNode }) {
  if (!isValidKey) {
    return <>{children}</>;
  }

  return <ClerkProvider>{children}</ClerkProvider>;
}
