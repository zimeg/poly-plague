// eslint-disable-next-line import/extensions
import { DailyStats, InputData } from '../types';

interface Dailys {
  [date: string]: DailyStats;
}

export default function mapToDaily(data: InputData) {
  const days: Dailys = {};

  for (let i = data.dailyTestPos.dates.length - 1; i >= 0; i -= 1) {
    const date = data.dailyTestPos.dates[i];
    const performedTests = data.dailyTestPos.performedTests[i];
    const positiveTests = data.dailyTestPos.positiveTests[i];

    if (date !== data.symptVsAsympt.dates[i]) throw new Error('Days misalign in data');
    const onCampusCases = data.studentNewCases.onCampusCases[i];
    const offCampusCases = data.studentNewCases.offCampusCases[i];

    if (date !== data.symptVsAsympt.dates[i]) throw new Error('Days misalign in data');
    const symptCases = data.symptVsAsympt.symptCases[i];
    const asymptCases = data.symptVsAsympt.asymptCases[i];

    days[date as string] = {
      positiveTests,
      performedTests,
      dailyPositivitity:
        performedTests > 0 ? (positiveTests as number) / (performedTests as number) : 0,
      onCampusCases,
      offCampusCases,
      symptCases,
      asymptCases,
    };
  }

  return days;
}
