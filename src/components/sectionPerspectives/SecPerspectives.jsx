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
          <p>
            6G vil muliggøre en fuldt forbundet verden, hvor mennesker, maskiner
            og systemer kommunikerer i realtid uden begrænsninger.
          </p>
          <Link to="/perspectives">
            <Button buttonText="Se mere" />
          </Link>
          <div className={styles.futureDiv}>
            <a href="/Fremtid 6G.pdf" download>
              Download PDF
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default SecPerspectives;
