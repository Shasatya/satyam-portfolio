import { logo } from "../../assets";
import { FooterData } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <img src={logo} alt="logo" />
      <div className="footer-right">
        <h3>Say Hello!</h3>
        <ul>
          {FooterData.map((f) => (
            <a href={f.href} key={f.key} target="_blank" rel="noreferrer">
              {f.icon}
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
