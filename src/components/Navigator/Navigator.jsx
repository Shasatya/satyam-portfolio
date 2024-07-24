import { useState } from "react";
import { NavListData } from "../../constants";
import { Link } from "react-scroll";
import "./Navigator.scss";
const Navigator = () => {
  const [link, setLink] = useState("");

  return (
    <nav className="navigator">
      <ul>
        {NavListData.map((l) => (
          <li key={l.id}>
            <Link
              to={l.href}
              smooth={true}
              duration={500}
              className={link === l.label ? "active-link" : ""}
              onClick={() => setLink(l.label)}
            >
              <p>{l.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
