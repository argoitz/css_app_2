import { useState } from "react";
import "./Header.scss";

let Header = () => {
  let [visible, setVisible] = useState(false);
  return (
    <nav>
      <ul className={!visible ? "hidden" : ""}>
        <li>
          <a>Css Layout</a>
        </li>
        <li>
          <a>Css Layout</a>
        </li>
        <li>
          <a>Css Layout</a>
        </li>
        <li>
          <a>Css Layout</a>
        </li>
        <li>
          <a>Css Layout</a>
        </li>

        <li className="menu-icon" onClick={() => setVisible(!visible)}>
          Menu
        </li>
      </ul>
    </nav>
  );
};

export default Header;
