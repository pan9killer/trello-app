import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useState, FormEvent } from "react";
import { newBoard } from "../../utils/createboard";
import { addBoard } from "../../redux/actions/boardAction";
import { ModalWindow } from "../../interfaces/interface";

const Modal = ({ active, setActive }: ModalWindow) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addNewBoard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addBoard(newBoard(value)));
    setValue("");
  };

  return (
    <div
      className={active ? styles.active : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={`${
          active ? styles.modal__body__active : styles.modal__body
        } input-group mb-3`}
        onClick={(e) => e.stopPropagation()}
      >
        <form className={styles.modal__form} onSubmit={addNewBoard}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            className="form-control"
            placeholder="New board name"
          />
          <button className="btn btn-outline-secondary">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
