import { Link } from "react-router-dom";
import styles from "./secBenefits.module.css";
import Button from "../button/Button";

const SecBenefits = () => {
  return (
    <div className={styles.devContainer}>
      <figure className={styles.devFigure}>
        <figcaption className={styles.devFigcaption}>
          <h2 className={styles.benTitle}>Hovedkarakteristika ved 6G</h2>
          <ul>
            <li>Hastigheder op til 100 gange hurtigere end 5G.</li>
            <li>Ultra-lav latenstid til realtidskommunikation.</li>
            <li>Forbedret energieffektivitet og AI-integration.</li>
          </ul>
          <Link to="/perspectives">
            <Button buttonText="Se mere" />
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default SecBenefits;
