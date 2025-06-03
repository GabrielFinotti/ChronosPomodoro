import style from "./styles.module.css";

type InputProps = {
  type: "text" | "number";
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

function Input(props: InputProps) {
  return (
    <>
      <label className={style.label} htmlFor={props.id}>
        {props.label}
      </label>
      <input className={style.input} type={props.type} id={props.id} />
    </>
  );
}

export default Input;
