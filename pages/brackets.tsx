import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Column from "../src/components/Column";
import CardElement from "../src/components/CardElement";
import Header from "../src/components/Header";
import AddColumn from "../src/components/AddColumn";

const Boards = () => {
  return (
    <div>
      <Head>
        <title>Boards</title>
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

      <Header />

      <hr className={styles.header__line} />

      <main className={styles.main}>
        <div className={styles.head__block}>
          <h1>Brackets</h1>
        </div>

        <div className={styles.column}>
          <Column />
          <Column />
          <AddColumn />
        </div>
      </main>
    </div>
  );
};

export default Boards;
