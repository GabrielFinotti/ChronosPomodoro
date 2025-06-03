import style from "./styles.module.css";

function Cycles() {
  return (
    <div className={style.cycles}>
      <span>Ciclos</span>
      <div className={style.cycleDots}>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
        <span className={`${style.cycleDot} ${style.workTime}`}></span>
        <span className={`${style.cycleDot} ${style.longBreakTime}`}></span>
      </div>
    </div>
  );
}

export default Cycles;
