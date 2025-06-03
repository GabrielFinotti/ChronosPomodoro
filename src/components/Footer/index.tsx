import style from "./styles.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <a href="">Entenda como funciona a técnica de pomodoro</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️ e ☕
      </a>
    </footer>
  );
}

export default Footer;
