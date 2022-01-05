import styles from "./index.module.scss";
import { ElementHeader } from "../../interfaces/interface";

const CardElementHeader = ({ headerElement }: ElementHeader) => {
  return (
    <div className={styles.bracket__card__header}>
      <span className={styles.bracket__card__head}>{headerElement}</span>
      <span>&hellip;</span>
    </div>
  );
};

export default CardElementHeader;
