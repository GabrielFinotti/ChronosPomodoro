import { PlayCircleIcon } from "lucide-react";
import Button from "../Button";
import Cycles from "../Cycles";
import Input from "../Input";
import style from "./styles.module.css";

function Form() {
  return (
    <form className={style.form}>
      <div className={style.formRow}>
        <Input
          type="text"
          labelText="Task"
          id="task"
          placeholder="Digite sua tarefa"
        />
      </div>
      <div className={style.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={style.formRow}>
        <Cycles />
      </div>
      <div className={style.formRow}>
        <Button icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}

export default Form;
