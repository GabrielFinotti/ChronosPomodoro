import Input from "../Input";
import style from "./styles.module.css";

function Form() {
  return (
    <form className={style.form}>
      <div className={style.formRow}>
        <Input type="text" label="Task" id="task" />
      </div>
      <div className={style.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={style.formRow}>
        <p>Ciclos</p>
        <p>0 0 0 0 0</p>
      </div>
      <div className={style.formRow}>
        <button>Enviar</button>
      </div>
    </form>
  );
}

export default Form;
