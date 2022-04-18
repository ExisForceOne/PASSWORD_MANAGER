import style from "./Menu.module.css";
import { NavLink } from "react-router-dom";
function Menu(props) {
  function activeLink({ isActive }) {
    return {
      fontWeight: isActive ? "bolder" : null,
      backgroundColor: isActive ? "white" : "#ddd",
    };
  }

  return (
    <nav>
      <ul className={style.list}>
        <li>
          <NavLink className={style.listItem} style={activeLink} to="vault">
            Vault
          </NavLink>
        </li>
        <li>
          <NavLink className={style.listItem} style={activeLink} to="analysis">
            Analysis
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
