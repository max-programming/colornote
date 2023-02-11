import { XataClient } from '@/xata';
import { XataAdapter } from '@next-auth/xata-adapter';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { compare } from 'bcryptjs';

const client = new XataClient();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default NextAuth({
  adapter: XataAdapter(client),
  providers: [
    Credentials({
      credentials: {
        email: { type: 'email', placeholder: 'Your email' },
        password: { type: 'password', placeholder: 'Your password' },
      },
      async authorize(credentials, req) {
        const { email, password } = await loginSchema.parseAsync(credentials);
        const user = await client.db.nextauth_users
          .filter({ email })
          .getFirst();

        if (!user) return null;

        const passwordMatch = await compare(password, user.password!);

        if (passwordMatch) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: { strategy: 'jwt' },
  secret: 'super secret string',
});
