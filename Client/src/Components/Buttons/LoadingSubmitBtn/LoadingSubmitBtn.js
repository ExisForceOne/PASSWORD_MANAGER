import style from "./LoadingSubmitBtn.module.css";
export default function LoadingSubmitBtn(props) {
  return props.loading ? (
    <div className={style.spinnerContainer}>
      <span className={style.spinner}></span>
    </div>
  ) : (
    <button className={style.submit} type="submit">
      {props.text}
    </button>
  );
}
