import { openai } from '@ai-sdk/openai';
import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
  type UIMessage,
} from 'ai';

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
    const { messages } = (await req.json()) as { messages: UIMessage[] };

    // Generate system prompt with today's context
    const systemPrompt = generateSystemPrompt();

    // Convert UI messages to model messages
    const modelMessages = await convertToModelMessages(messages);

    // Create a UI message stream
    const stream = createUIMessageStream({
      execute: async ({ writer }) => {
        const result = streamText({
          model: openai('gpt-4o-mini'),
          system: systemPrompt,
          messages: modelMessages,
        });

        // Write text parts as they come in
        for await (const chunk of result.textStream) {
          writer.write({ type: 'text-delta', delta: chunk, id: 'msg' });
        }
      },
    });

    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
