import { Link } from "react-router-dom";
import styles from "./secUse.module.css";
import Button from "../button/Button";

const SecUse = () => {
  return (
    <div className={styles.devContainer}>
      <figure className={styles.devFigure}>
        <figcaption className={styles.devFigcaption}>
          <h2 className={styles.useTitle}>Potentielle anvendelser af 6G</h2>
          <Link to="/perspectives">
            <Button buttonText="Se mere" />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default SecUse;
