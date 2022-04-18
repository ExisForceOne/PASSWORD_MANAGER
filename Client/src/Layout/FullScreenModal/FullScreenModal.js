import style from "./FullScreenModal.module.css";

export default function FullScreenModal(props) {
  return (
    <div className={style.container}>
      <h4>{props.title}</h4>
      {props.children}
    </div>
  );
}
