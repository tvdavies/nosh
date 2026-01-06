import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function ChatPage() {
  const session = await auth();

  // This should be handled by middleware, but double-check
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Chat</h1>
      <p className="mt-2 text-muted-foreground">
        Hi {session.user.name?.split(' ')[0]}! AI chat coming soon...
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        This feature requires authentication to prevent abuse.
      </p>
    </div>
  );
}
