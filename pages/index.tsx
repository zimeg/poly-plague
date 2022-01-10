import Head from 'next/head';
import { useState } from 'react';
import Disclaimer from '../components/Disclaimer';
import Chart from '../components/Chart';
import { DailyData, RawGraphingData } from '../types';
import mapToDaily from '../utils/mapToDaily';

const Home = (props: DailyData) => {
  const { days, lastUpdated } = props;

  const [showOnCampus, toggleOnCampus] = useState(false);

  const graphingData: RawGraphingData[] = Object.keys(days).map((date) => ({
    date,
    positiveTests: days[date].positiveTests,
    performedTests: days[date].performedTests,
  })).reverse();

  const stats = Object.keys(days).map((d) => days[d]);

  return (
    <div>
      <Head>
        <title>Poly Plague</title>
        <meta name="description" content="data about COVID @ Cal Poly" />
      </Head>

      <main className="py-8 space-y-8">
        <Disclaimer lastUpdated={lastUpdated} />

        <Chart data={graphingData} />

        <div className="sm:px-14 md:px-30 lg:px-40 xl:px-56 space-y-4">
          <section className="px-2 space-y-2">
            <h2 className="bg-green-900 text-xl pl-2 py-2 mb-2">☄️ quick stats</h2>
          </section>

          <section className="px-2 w-full">
            <div className="text-center font-bold">🌡 positive tests</div>
            <div className="flex w-full text-center font-bold py-1 space-x-2">
              <span className="w-1/5">&nbsp;</span>
              <span className="flex w-3/5 text-center px-1">
                <span className="w-1/3">
                  <span className="sm:hidden">🦠</span>
                  <span className="hidden sm:inline-block">🦠 total</span>
                </span>
                {showOnCampus ? (
                  <>
                    <span className="w-1/3">
                      <span className="sm:hidden">🏫</span>
                      <span className="hidden sm:inline-block">🏫 on campus</span>
                    </span>
                    <span className="w-1/3">
                      <span className="sm:hidden">🏠</span>
                      <span className="hidden sm:inline-block">🏠 off campus</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="w-1/3">
                      <span className="sm:hidden">🤒</span>
                      <span className="hidden sm:inline-block">🤒 symptomatic</span>
                    </span>
                    <span className="w-1/3">
                      <span className="sm:hidden">😷</span>
                      <span className="hidden sm:inline-block">😷 asymptomatic</span>
                    </span>
                  </>
                )}
              </span>
              <span className="w-1/5">
                <span className="sm:hidden">🏥</span>
                <span className="hidden sm:inline-block">🏥 tests performed</span>
              </span>
            </div>

            <div className="flex w-full text-center space-x-2">
              <span className="w-1/5 text-right bg-neutral-800 py-1 pr-2">yesterday</span>
              <span className="flex w-3/5 text-center bg-neutral-800 p-1">
                <span className="w-1/3">{stats[0].positiveTests}</span>
                {showOnCampus ? (
                  <>
                    <span className="w-1/3">{stats[0].onCampusCases}</span>
                    <span className="w-1/3">{stats[0].offCampusCases}</span>
                  </>
                ) : (
                  <>
                    <span className="w-1/3">{stats[0].symptCases}</span>
                    <span className="w-1/3">{stats[0].asymptCases}</span>
                  </>
                )}
              </span>
              <span className="w-1/5 bg-neutral-800 p-1">{stats[0].performedTests}</span>
            </div>

            <div className="flex w-full text-center space-x-2">
              <span className="w-1/5 text-right py-1 pr-2">
                <span className="sm:hidden">7 days</span>
                <span className="hidden sm:inline-block">last 7 days</span>
              </span>
              <span className="flex w-3/5 text-center p-1">
                <span className="w-1/3">{stats.slice(0, 7).reduce((count, d) => count + +(d.positiveTests), 0)}</span>
                {showOnCampus ? (
                  <>
                    <span className="w-1/3">{stats.slice(0, 7).reduce((count, d) => count + +(d.onCampusCases), 0)}</span>
                    <span className="w-1/3">{stats.slice(0, 7).reduce((count, d) => count + +(d.offCampusCases), 0)}</span>
                  </>
                ) : (
                  <>
                    <span className="w-1/3">{stats.slice(0, 7).reduce((count, d) => count + +(d.symptCases), 0)}</span>
                    <span className="w-1/3">{stats.slice(0, 7).reduce((count, d) => count + +(d.asymptCases), 0)}</span>
                  </>
                )}
              </span>
              <span className="w-1/5 p-1">{stats.slice(0, 7).reduce((count, d) => count + +(d.performedTests), 0)}</span>
            </div>

            <div className="flex w-full text-center space-x-2">
              <span className="w-1/5 text-right bg-neutral-800 py-1 pr-2">
                <span className="sm:hidden">30 days</span>
                <span className="hidden sm:inline-block">last 30 days</span>
              </span>
              <span className="flex w-3/5 text-center bg-neutral-800 p-1">
                <span className="w-1/3">{stats.slice(0, 30).reduce((count, d) => count + +(d.positiveTests), 0)}</span>
                {showOnCampus ? (
                  <>
                    <span className="w-1/3">{stats.slice(0, 30).reduce((count, d) => count + +(d.onCampusCases), 0)}</span>
                    <span className="w-1/3">{stats.slice(0, 30).reduce((count, d) => count + +(d.offCampusCases), 0)}</span>
                  </>
                ) : (
                  <>
                    <span className="w-1/3">{stats.slice(0, 30).reduce((count, d) => count + +(d.symptCases), 0)}</span>
                    <span className="w-1/3">{stats.slice(0, 30).reduce((count, d) => count + +(d.asymptCases), 0)}</span>
                  </>
                )}
              </span>
              <span className="w-1/5 bg-neutral-800 p-1">{stats.slice(0, 30).reduce((count, d) => count + +(d.performedTests), 0)}</span>
            </div>

            <div className="flex w-full text-center space-x-2">
              <span className="w-1/5 text-right py-1 pr-2">all time</span>
              <span className="flex w-3/5 text-center p-1">
                <span className="w-1/3">{stats.reduce((count, d) => count + +(d.positiveTests), 0)}</span>
                {showOnCampus ? (
                  <>
                    <span className="w-1/3">{stats.reduce((count, d) => count + +(d.onCampusCases), 0)}</span>
                    <span className="w-1/3">{stats.reduce((count, d) => count + +(d.offCampusCases), 0)}</span>
                  </>
                ) : (
                  <>
                    <span className="w-1/3">{stats.reduce((count, d) => count + +(d.symptCases), 0)}</span>
                    <span className="w-1/3">{stats.reduce((count, d) => count + +(d.asymptCases), 0)}</span>
                  </>
                )}
              </span>
              <span className="w-1/5 p-1">{stats.reduce((count, d) => count + +(d.performedTests), 0)}</span>
            </div>
          </section>

          <div className="space-y-2 ml-4">
            <div className="space-x-2">
              <input type="radio" name="positiveSubtype" id="symptoms" checked={!showOnCampus} onChange={() => toggleOnCampus(!showOnCampus)} />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="symptoms">show by symptoms</label>
            </div>
            <div className="space-x-2">
              <input type="radio" name="positiveSubtype" id="campus" checked={showOnCampus} onChange={() => toggleOnCampus(!showOnCampus)} />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="campus">show by living arrangement</label>
            </div>
          </div>

          <section className="px-2 sm:hidden">
            <h2 className="bg-yellow-900 text-lg pl-2 py-1 mb-2">🔐 key</h2>
            <p className="pl-2">🦠 - total</p>
            {showOnCampus && (
            <>
              <p className="pl-2">🏫 - on campus</p>
              <p className="pl-2">🏠 - off campus</p>
            </>
            )}
            {!showOnCampus && (
            <>
              <p className="pl-2">🤒 - symptomatic</p>
              <p className="pl-2">😷 - asymptomatic</p>
            </>
            )}
            <p className="pl-2">🏥 - tests provided</p>
          </section>

        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const stats = await import('../public/stats-history.json');
  const data = stats.default;
  const days = mapToDaily(data);

  return { props: { days, lastUpdated: data.updateDateTime } };
}

export default Home;
