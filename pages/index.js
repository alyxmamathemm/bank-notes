import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Денежные знаки </title>

        <link rel="icon" href="/ic_launcher-web.ico" />
      </Head>

      <main>
        <h1 className="title"> Денежные знаки всего мира</h1>
        <section className="content">
          <div className="grid">
            <Link href="/CoinsOfRussia">
              <a href="#" className="card">
                {" "}
                <div className="h3">
                  <h3>
                    Монеты России
                    <p>&#8595;</p>
                  </h3>
                </div>
                <p>
                  Найди свои юбилейные монеты, а так-же монеты времен: РФ, СССР,
                  РСФСР, Российской Империи, древней Руси, античности и
                  средневековья.
                </p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </a>
            </Link>
          </div>

          <div className="grid">
            <Link href="/ForeignСoins">
              <a href="#" className="card">
                {" "}
                <div className="h3">
                  <h3>
                    Иностранные монеты
                    <p> &#8595;</p>
                  </h3>
                </div>
                <p>
                  Найди свою юбилейную, или обычную иностранную монету, любого
                  временного промежутка. &nbsp; <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </p>
              </a>
            </Link>
          </div>

          <div className="grid">
            <Link href="/BanknotesOfRussia">
              <a href="#" className="card">
                {" "}
                <div className="h3">
                  <h3>
                    {" "}
                    Банкноты России
                    <p> &#8595;</p>
                  </h3>
                </div>
                <p>
                  Здесь вы сможете отыскать свои юбилейные, а так-же обычные
                  банкноты времен: РФ, СССР, РСФСР, Российской Империи. &nbsp;
                  {""}
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </p>
              </a>
            </Link>
          </div>

          <div className="grid">
            <Link href="/ForeignBanknots/ForeignBanknots">
              <a href="#" className="card">
                {" "}
                <div className="h3">
                  <h3>
                    Иностранные банкноты
                    <p>&#8595;</p>
                  </h3>
                </div>
                <p>
                  Кликнув сюда, вы перейдете на страницу, где сможете отыскать
                  любую иностранную банкноту.&nbsp;
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </p>
              </a>
            </Link>
          </div>

          <div className="grid">
            <Link href="/HelpfulInformation">
              <a href="#" className="card">
                {" "}
                <div className="h3">
                  <h3>
                    Полезная информация
                    <p>&#8595;</p>
                  </h3>
                </div>
                <p1>
                  Просто нажмите сюда, чтобы узнать все о монетах и банкнотах.
                  Их дефектах, способах защиты и ТД.&nbsp;
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                </p1>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 700px;
          padding-left: 10px;
          margin-left: 1px;
        }

        .content {
          display: flex;
          max-width: 100000px;
          max-height: 1000px;
          align-items: baseline;
        }

        .tetle:hover {
          color: #1e90ff;
          background: #1e90ff;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;

          margin-top: 10;
          margin-bottom: 10;

          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        footer {
          width: 100%;
          height: 100px;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-family: "Rubik One", sans-serif;
          font-size: 50px;
          text-transform: uppercase;
          background: #2e2f45;
          display: table;
          margin: 20px auto;
          color: white;
          border-radius: 5px;
          border: solid 2px #000000;
          padding: 5px 10px;
          background: linear-gradient(45deg, #00008b 33%, #8b0000 66%, #008080);
          color: #ffffff;
          border-radius: 10px;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #ffffff;
          border-radius: 100px;
          padding: 0.75rem;

          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          flex-basis: 50%;
          margin-top: 3rem;
          font-size: 22px;
          margin: 4px;
        }

        * {
          margin: 0;
          padding: 0;
        }

        .h3 {
          color: #191970;
        }

        .card {
          text-align: center;
          padding: 8px 10px;
          border: solid 1.2px #000000;
          color: #777777;
          background: #ffffff;
          tansition: all 0.3s linear;
          -webkit-transition: all 0.3s linear;
          -moz-transition: all 0.3s linear;
          text-transform: capitaliz;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          border: 1.4 px solid #000000;
          text-decoration: none;
          width: 260px;
          height: 600px;

          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover {
          color: #ffffff;
          background: #696969;

          tansition: all 0.3s linear;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 60000px) {
          .grid {
            width: 1900%;
            flex-direction: column;
            height: 420px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-image: url(/images/MyCollages.jpg);
          max-width: 1800px;
          max-height: 80px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
