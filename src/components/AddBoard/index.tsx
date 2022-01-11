import styles from "./index.module.scss";
import { useState } from "react";
import Modal from "../Modal";

const AddBoard = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div
        className={styles.new__board}
        onClick={() => {
          setModalActive(true);
        }}
      >
        <p>+ Add new board</p>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default AddBoard;
