import Head from 'next/head';

const Plans = () => (
  <div>
    <Head>
      <title>Future Plans - Poly Plague</title>
      <meta name="description" content="updates and ideas for this site" />
    </Head>

    <main className="py-8 space-y-8">
      <div className="sm:flex py-3 px-3 sm:px-16 md:px-30 lg:px-40 xl:px-60 sm:justify-between">

        <section className="px-2 space-y-2">
          <h2 className="bg-green-900 text-xl pl-2 py-2 mb-2">🧭 future plans</h2>
          <p>
            I&apos;m hoping this site can capture how Poly is handling COVID and a bit of what
            student life is like, in some sort of archive-y way. The data portion of this site
            was hacked together pretty quickly, meaning there&apos;s plenty of room for improvement.
          </p>
          <p>
            There are also a few different directions this could go. I&apos;ll list some of my
            thoughts below. If you&apos;re reading this (wow) and have ideas or want to help out,
            feel free to
            {' '}
            <a
              href="https://twitter.com/zimboboys"
              className="font-bold hover:underline"
            >
              message me on twitter 🐦
            </a>
            {' or '}
            <a
              href="https://github.com/Zimboboys/poly-plague"
              className="font-bold hover:underline"
            >
              checkout the github 👾
            </a>
            .
          </p>
          <ul className="list-disc pl-4">
            <li>additional filters and views for sifting through data</li>
            <li>collect data that&apos;s not as available (eg. vaccination rates, isolations)</li>
            <li>a timeline of university announcements and news</li>
            <li>student thoughts and rants</li>
          </ul>
          <p className="text-neutral-300 italic">
            side note: I realize this was made quite late in the long game of covid. Stress checking
            the dashboard at the start of Omicron made me want a better dashboard, so here we are.
          </p>
        </section>
      </div>
    </main>
  </div>
);

export default Plans;
