import { type NextApiRequest, type NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Record<string, unknown>>
): Promise<void> {
  const token = await getToken({ req })
  if (token == null) {
    res.status(403).json({ error: 'unauthorized' })
    return
  }
  res.json({ message: 'success' })
}
