import styles from "./sectionFuture.module.css";
import FutureImg from "../../assets/images/img1.jpg";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const SectionFuture = () => {
  return (
    <article className={styles.future}>
      <img className={styles.futureImg} src={FutureImg} alt="Internet 6G" />
      <figcaption className={styles.futureFigcaption}>
        <h2>Future</h2>
        <Link to="/future">
          <Button className={styles.btnFuture} buttonText="Åben" />
        </Link>
      </figcaption>
    </article>
  );
};

export default SectionFuture;
