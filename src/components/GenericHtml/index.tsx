import style from "./styles.module.css";

type GenericHtmlProps = {
  children: React.ReactNode;
};

function GenericHtml({ children }: GenericHtmlProps) {
  return <div className={style.genericHtml}>{children}</div>;
}

export default GenericHtml;
