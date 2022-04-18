import { forwardRef } from "react";
import style from "./CheckboxContainer.module.css";

const CheckboxContainer = forwardRef((props, ref) => {
  return (
    <div className={style.container} ref={ref}>
      <p>Include:</p>

      {props.children}
    </div>
  );
});

export default CheckboxContainer;
