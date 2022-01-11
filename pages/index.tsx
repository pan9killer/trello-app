import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Board from "../src/components/Boards";
import HeadHTML from "../src/components/Head";
import AddBoard from "../src/components/AddBoard";
import { useSelector } from "react-redux";
import { Boards } from "../src/interfaces/interface";
import { RootState } from "../src/redux/store";

const Home: NextPage = () => {
  const boardState = useSelector<RootState, Boards>(
    (state) => state.boardReducer
  );
  console.log(boardState);
  return (
    <>
      <HeadHTML
        title={"Trello app on Next with Redux and TypeScript"}
        description={"Trello app on Next with Redux and TypeScript"}
      />

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
          {boardState.map((board) => {
            return (
              <div key={board.id}>
                <Link href={board.href} passHref>
                  <div className={styles.card}>
                    <Board header={board.header} desc={board.desc} />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <AddBoard />
      </main>
    </>
  );
};

export default Home;
