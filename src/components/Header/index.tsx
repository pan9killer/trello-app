import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={20} />
        </div>
      </Link>

      <div className={styles.vertical__line} />

      <Link href="/" passHref>
        <div className={styles.links}>
          <Image src="/boards-mark.png" alt="boards" width={20} height={20} />
          <a>Boards</a>
        </div>
      </Link>

      <div className={styles.vertical__line} />
    </header>
  );
};

export default Header;
