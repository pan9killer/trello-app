import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import CardElement from "../CardElement";
import { useDrop } from "react-dnd";

const Column = () => {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "bracket__card",
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <div ref={drop} className={styles.brackets__grid}>
      <div className={styles.bracket__card__element}>
        <CardElement />

        <div className={styles.bracket__card}>
          <div className={styles.bracket__lines}>
            <div className={`${styles.bracket__line} ${styles.brown}`} />
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
            <Image src="/cart-image.png" alt="add" width={341} height={177} />
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
  );
};

export default Column;
