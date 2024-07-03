import { useState } from "react";
import { NavListData } from "../../constants";
import "./Navigator.scss";
const Navigator = () => {
  const [link, setLink] = useState("");

  return (
    <div className="navigator-container">
      <nav className="navigator">
        <ul>
          {NavListData.map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                className={link === l.label ? "active-link" : ""}
                onClick={() => setLink(l.label)}
              >
                {l.icon}
                <p>{l.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
