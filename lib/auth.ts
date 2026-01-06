import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

/**
 * Authentication Configuration
 *
 * Uses Google OAuth to restrict access to specific email addresses.
 * Set ALLOWED_EMAILS in your .env.local file to control who can log in.
 */

// Parse allowed emails from environment variable
function getAllowedEmails(): string[] {
  const emails = process.env.ALLOWED_EMAILS;
  if (!emails) {
    console.warn('ALLOWED_EMAILS not set - no users will be able to log in');
    return [];
  }
  return emails.split(',').map((email) => email.trim().toLowerCase());
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user }) {
      // Only allow specific email addresses
      const allowedEmails = getAllowedEmails();
      const userEmail = user.email?.toLowerCase();

      if (!userEmail) {
        return false;
      }

      if (allowedEmails.length === 0) {
        console.error('No allowed emails configured');
        return false;
      }

      const isAllowed = allowedEmails.includes(userEmail);

      if (!isAllowed) {
        console.log(`Login denied for: ${userEmail}`);
      }

      return isAllowed;
    },
    async session({ session }) {
      return session;
    },
  },
});
