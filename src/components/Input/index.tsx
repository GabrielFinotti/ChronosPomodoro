import style from "./styles.module.css";

type InputProps = {
  type: "text" | "number";
  labelText?: string;
} & React.ComponentPropsWithoutRef<"input">;

function Input({ type, labelText, ...props }: InputProps) {
  return (
    <>
      {labelText && <label htmlFor={props.id}>{labelText}</label>}
      <input className={style.input} type={type} {...props} />
    </>
  );
}

export default Input;
