import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { DailyData } from '../../types';

import runMiddleware from '../../utils/middleware';
import mapToDaily from '../../utils/mapToDaily';

const cors = Cors({ methods: ['GET', 'HEAD'] });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DailyData>,
) {
  await runMiddleware(req, res, cors);

  const stats = await import('../../public/stats-history.json');
  const data = stats.default;
  const dailyData = mapToDaily(data);

  res.status(200).json({ lastUpdated: data.updateDateTime, days: dailyData });
}
