import styles from "./sectionFuture.module.css";

import { Link } from "react-router-dom";
import Button from "../button/Button";

const SectionFuture = () => {
  return (
    <article className={styles.future}>
      <figcaption className={styles.futureFigcaption}>
        <h2>Velkommen til fremtidens internet – 6G</h2>
        <p>
          Den sjette generation af mobilkommunikation (6G) vil være det næste
          skridt i udviklingen af trådløse teknologier efter 5G.
        </p>
        <Link to="/future">
          <Button className={styles.btnFuture} buttonText="Åben" />
        </Link>
        <div className={styles.futureDiv}>
          <a href="/Fremtid 6G.pdf" download>
            Download PDF
          </a>
        </div>
      </figcaption>
    </article>
  );
};

export default SectionFuture;
