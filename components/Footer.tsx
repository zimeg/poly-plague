import Link from 'next/link';

const Footer = () => (
  <footer className="text-center sm:flex bg-green-900 py-6 px-3 sm:px-16 md:px-30 lg:px-40 xl:px-60 sm:justify-between">
    <div className="mb-1 space-y-1 hidden sm:block sm:text-left">
      <p>🦠 Poly Plague</p>
      <p>COVID @ Cal Poly</p>
      <p>2020-?</p>
    </div>
    <div className="sm:text-right space-y-1">
      <div>
        <a
          href="https://coronavirus.calpoly.edu/dashboard"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Cal Poly Coronavirus Campus Dashboard&nbsp;🔗
        </a>
      </div>
      <div className="space-x-6 hidden sm:block">
        <Link href="/">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="hover:underline">dashboard 📺</a>
        </Link>
        <Link href="/daily">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="hover:underline">daily data 🗄</a>
        </Link>
      </div>
      <div className="space-x-6 hidden sm:block">
        <Link href="/plans">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="hover:underline">future plans 🧭</a>
        </Link>
        <a
          href="https://github.com/Zimboboys/poly-plague"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          github 👾
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
