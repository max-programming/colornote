import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { hash } from 'bcryptjs';
import { XataClient } from '@/xata';

const client = new XataClient();

const registerUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export default async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const body = registerUserSchema.parse(req.body);
    const hashedPassword = await hash(body.password, 10);
    const seed = body.email.split('@')[0];

    const user = await client.db.nextauth_users.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
      image: `https://api.dicebear.com/5.x/avataaars/svg?seed=${seed}`,
    });

    return res.json({ user });
  } catch (e) {
    console.error({ e });
  }
}
