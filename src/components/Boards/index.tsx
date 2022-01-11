import styles from "../../../styles/Home.module.scss";
import { BoardBlock } from "../../interfaces/interface";

const Board = ({ header, desc }: BoardBlock) => {
  return (
    <>
      <h2>{header}</h2>
      <p>{desc}</p>
      <p className={styles.arr}> &rarr;</p>
    </>
  );
};

export default Board;
