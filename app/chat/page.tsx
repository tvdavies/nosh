import { redirect } from 'next/navigation';

import { ChatInterface } from '@/components/chat-interface';
import { auth } from '@/lib/auth';

export default async function ChatPage() {
  const session = await auth();

  // This should be handled by middleware, but double-check
  if (!session?.user) {
    redirect('/login');
  }

  return <ChatInterface />;
}
