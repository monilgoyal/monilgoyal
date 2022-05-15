// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(500).json({ error: 'failed to load data' })
    // res.status(200).json({ name: 'John Doe' })
}
