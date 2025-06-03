import style from "./style.module.css";

type ButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red";
} & React.ComponentProps<"button">;

function Button(props: ButtonProps) {
  return (
    <button
      className={`${style.button} ${style[props.color ?? "green"]}`}
      {...props}
    >
      {props.icon}
    </button>
  );
}

export default Button;
