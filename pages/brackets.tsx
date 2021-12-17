import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Boards = () => {
  return (
    <div className={styles.container}>
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

      <header className={styles.header}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={50} height={20} />
          </div>
        </Link>
        <div className={styles.vertical__line}></div>
        <Link href="/" passHref>
          <div className={styles.links}>
            <Image src="/boards-mark.png" alt="boards" width={20} height={20} />
            <a>Boards</a>
          </div>
        </Link>
        <div className={styles.vertical__line}></div>
      </header>
      <hr className={styles.header__line} />

      <main className={styles.main}>
        <div className={styles.head__block}>
          <h1>Brackets</h1>
        </div>

        <div className={styles.brackets__grid}>
          <div className={styles.bracket__card__element}>
            <div className={styles.bracket__card__header}>
              <span className={styles.bracket__card__head}>Brackets</span>
              <span>&hellip;</span>
            </div>

            <div className={styles.bracket__card}>
              <div className={styles.bracket__lines}>
                <div className={`${styles.bracket__line} ${styles.brown}`} />
                <div className={`${styles.bracket__line} ${styles.green}`} />
                <div className={`${styles.bracket__line} ${styles.yellow}`} />
                <div className={`${styles.bracket__line} ${styles.blue}`} />
              </div>
              <p className={styles.bracket__card__head}>
                Old fashioned recipe for preventing allergies and chemical
                sensitivities
              </p>
              <p className={styles.bracket__card__text}>
                Successful businesses know the importance of building and
                maintaining good working.
              </p>
              <div className={styles.bracket__card__actions}>
                <div className={styles.icons}>
                  <span>15 </span>
                  <Image
                    src="/comments.png"
                    alt="comments"
                    width={15}
                    height={15}
                  />
                </div>
                <div className={styles.icons}>
                  <span>25 </span>
                  <Image src="/likes.png" alt="likes" width={15} height={15} />
                </div>
                <div className={styles.icons}>
                  <span>15 </span>
                  <Image src="/add.png" alt="add" width={15} height={15} />
                </div>
              </div>
            </div>

            <div className={styles.bracket__card}>
              <div className={styles.bracket__lines}>
                <div className={`${styles.bracket__line} ${styles.yellow}`} />
                <div className={`${styles.bracket__line} ${styles.blue}`} />
              </div>
              <p className={styles.bracket__card__head}>
                Old fashioned recipe for preventing allergies and chemical
                sensitivities
              </p>
              <div className={styles.bracket__card__actions}>
                <div className={styles.icons}>
                  <span>28 </span>
                  <Image
                    src="/comments.png"
                    alt="comments"
                    width={15}
                    height={15}
                  />
                </div>
                <div className={styles.icons}>
                  <span>14 </span>
                  <Image src="/likes.png" alt="likes" width={15} height={15} />
                </div>
                <div className={styles.icons}>
                  <span>5 </span>
                  <Image src="/add.png" alt="add" width={15} height={15} />
                </div>
              </div>
            </div>

            <div className={styles.bracket__card}>
              <div className={styles.bracket__card__image}>
                <Image
                  src="/cart-image.png"
                  alt="add"
                  width={341}
                  height={177}
                />
              </div>
              <div className={styles.bracket__lines}>
                <div className={`${styles.bracket__line} ${styles.blue}`} />
              </div>
              <p className={styles.bracket__card__head}>
                Old fashioned recipe for preventing allergies and chemical
                sensitivities
              </p>
              <div className={styles.bracket__card__actions}>
                <div className={styles.icons}>
                  <span>34 </span>
                  <Image
                    src="/comments.png"
                    alt="comments"
                    width={15}
                    height={15}
                  />
                </div>
                <div className={styles.icons}>
                  <span>55 </span>
                  <Image src="/likes.png" alt="likes" width={15} height={15} />
                </div>
                <div className={styles.icons}>
                  <span>12 </span>
                  <Image src="/add.png" alt="add" width={15} height={15} />
                </div>
              </div>
            </div>

            <div className={styles.bracket__new}>
              <p>+ Add new</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Boards;
