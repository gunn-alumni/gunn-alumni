import { sql } from '@databases/sqlite-sync'
import { type NextApiRequest, type NextApiResponse } from 'next'

import db from '@/db'

interface Alum {
  name: string
  user_id?: number
}

type Data = Record<number, Alum[]>

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const beginYear = req.query.beginYear ?? Number.MIN_SAFE_INTEGER
  const endYear = req.query.endYear ?? Number.MAX_SAFE_INTEGER

  const results: Data = {}
  db.query(sql`
    SELECT name, grad_year, user_id FROM people
    WHERE grad_year BETWEEN ${beginYear} AND ${endYear}
    ORDER BY name
  `).forEach((alum) => {
    results[alum.grad_year] ||= []
    results[alum.grad_year].push({
      name: alum.name,
      user_id: alum.user_id ?? undefined
    })
  })
  res.json(results)
}
