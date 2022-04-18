import style from "./Form.module.css";

export default function Form(props) {
  return (
    <>
      <h3 className={style.title}>{props.title}</h3>
      <form className={style.form} onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </>
  );
}
