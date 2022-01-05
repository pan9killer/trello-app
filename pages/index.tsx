import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Board from "../src/components/Boards";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trello app on Next with Redux and TypeScript</title>
        <meta
          name="description"
          content="Trello app on Next with Redux and TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={20} />
        </div>
        <div className={styles.vertical__line}></div>

        <div className={styles.last__element}>
          <a>Boards</a>
        </div>
      </header>
      <hr className={styles.header__line} />

      <main className={styles.main}>
        <div className={styles.head__block}>
          <h1>Boards</h1>
        </div>

        <div className={styles.grid}>
          <Link href="/brackets" passHref>
            <div className={styles.card}>
              <Board
                header={"Brackets"}
                desc={"Saving money – is something we would all like."}
              />
            </div>
          </Link>

          <div className={styles.card}>
            <Board
              header={"Pictures In The Sky"}
              desc={
                "In the last five to six years the FTA satellite receiver has become an everyday household electronic device."
              }
            />
          </div>

          <div className={styles.card}>
            <Board
              header={"How To Look Up"}
              desc={"Color is so powerful that it can persuade, motivate."}
            />
          </div>

          <div className={styles.card}>
            <Board
              header={"The Universe Through A Child S Eyes"}
              desc={
                "When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited."
              }
            />
          </div>

          <div className={styles.card}>
            <Board
              header={"Astronomy Or Astrology"}
              desc={"Conversations can be a tricky business."}
            />
          </div>

          <div className={styles.card}>
            <Board
              header={"Astronomy Or Astrology"}
              desc={"Conversations can be a tricky business."}
            />
          </div>
        </div>

        <div className={styles.new__board}>
          <p>+ Add new board</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
