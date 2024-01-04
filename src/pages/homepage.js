// pages/index.js
import Head from 'next/head';

const Home = () => {
  const openEndpoints = () => {
    window.open('/endpoints', '_blank');
  };

  return (
    <div className="body-parts">
      <Head>
        <title>Multi-purpose API</title>
        <link rel="icon" href="MP.png" />
        <link rel="stylesheet" href="homepage.css" />
      </Head>
      <div className="top-body">
        <header>Multi-purpose API</header>
        <footer>
          An API built from the npm package{' '}
          <a href="https://www.npmjs.com/package/multi-purpose" target="_blank">
            Multi-purpose
          </a>
          .
        </footer>
      </div>
      <div className="lower-body">
        <button className="primary" onClick={openEndpoints}>
          Endpoints
        </button>
      </div>
    </div>
  );
};

export default Home;
