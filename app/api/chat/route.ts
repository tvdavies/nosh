import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

import { auth } from '@/lib/auth';
import { generateSystemPrompt } from '@/lib/chat/system-prompt';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Check authentication
  const session = await auth();

  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const { messages } = await req.json();

    // Generate system prompt with today's context
    const systemPrompt = generateSystemPrompt();

    // Stream the response
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
