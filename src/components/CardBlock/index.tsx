import Image from "next/image";
import { useDrag } from "react-dnd";
import styles from "./index.module.scss";

const CardBlock = () => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "bracket__card",
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div
      ref={drag}
      className={`${styles.bracket__card} ${styles.dragStyle}`}
      style={{
        opacity: isDragging ? 0.3 : 1,
      }}
    >
      <div className={styles.bracket__lines}>
        <div className={`${styles.bracket__line} ${styles.brown}`} />
      </div>
      <p className={styles.bracket__card__head}>
        Old fashioned recipe for preventing allergies and chemical sensitivities
      </p>
      <p className={styles.bracket__card__text}>
        Successful businesses know the importance of building and maintaining
        good working.
      </p>
      <div className={styles.bracket__card__actions}>
        <div className={styles.icons}>
          <span>15 </span>
          <Image src="/comments.png" alt="comments" width={15} height={15} />
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
  );
};

export default CardBlock;
