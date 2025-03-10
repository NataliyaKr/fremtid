import styles from "./secPerspectives.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const SecPerspectives = () => {
  return (
    <div className={styles.devContainer}>
      <figure className={styles.devFigure}>
        <figcaption className={styles.devFigcaption}>
          <h2 className={styles.perspectivesTitle}>
            Udfordringer og fremtidsperspektiver.
          </h2>
          <Link to="/perspectives">
            <Button buttonText="Se mere" />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default SecPerspectives;
