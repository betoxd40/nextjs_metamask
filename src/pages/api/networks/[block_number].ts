import { getEstimatedBlockCountdownTime } from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { block_number } = req.query as { block_number: string };

  try {
    const response = await getEstimatedBlockCountdownTime(+block_number);
    res.status(200).json({ data: response.data });
  } catch (e) {
    // FIXME: Handle Error
    res.status(400).json({});
  }
}
