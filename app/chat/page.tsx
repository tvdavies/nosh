import { ChatInterface } from '@/components/chat-interface';

// Chat route is protected by middleware - authentication is enforced there
export default function ChatPage() {
  return <ChatInterface />;
}
