interface DisclaimerProps {
  lastUpdated: String;
}

const Disclaimer = (props: DisclaimerProps) => {
  const { lastUpdated } = props;
  return (
    <section className="space-y-2 mx-2 sm:mx-14 md:mx-30 lg:mx-40 xl:mx-60 bg-neutral-800 rounded-lg p-3 border border-neutral-700">
      <p>
        All data is sourced from the
        {' '}
        <a
          href="https://coronavirus.calpoly.edu/dashboard"
          target="_blank"
          rel="noreferrer"
          className="hover:underline font-bold"
        >
          Cal Poly Coronavirus Campus Dashboard&nbsp;🔗
        </a>
        {' '}
        but may not be up-to-date. See the Campus Dashboard for the most recent information.
      </p>

      <p className="text-neutral-400 italic">{`data last updated: ${lastUpdated}`}</p>
    </section>
  );
};

export default Disclaimer;
