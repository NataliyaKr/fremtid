import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <h2>FREMTID</h2>
      </div>
      <div className={styles.footerLinks}>
        <Link to="/future">Fremtid</Link>
        <Link to="/development">Udvikling</Link>
        <Link to="/characteristic">Karakteristika</Link>
        <Link to="/application">Anvendelse</Link>
        <Link to="/perspectives">Perspektiver</Link>
      </div>
      <div className={styles.footerSocial}>
        <Link to="https://www.facebook.com">
          <FaFacebook />
        </Link>
        <Link to="https://www.instagram.com">
          <FaInstagramSquare />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
