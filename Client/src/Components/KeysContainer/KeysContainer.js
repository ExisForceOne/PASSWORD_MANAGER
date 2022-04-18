import style from "./KeysContainer.module.css";

export default function KeysContainer(props) {
  return (
    <>
      <h4 className={style.header}>{props.header}</h4>
      <div className={style.grid}>{props.children}</div>
    </>
  );
}
