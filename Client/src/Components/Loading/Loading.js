import style from "./Loading.module.css";

export default function Loading(props) {
  return (
    <div className={style.container}>
      <div className={style.content}></div>
    </div>
  );
}
