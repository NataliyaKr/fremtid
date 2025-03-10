import { Link } from "react-router-dom";
import styles from "./sectionDev.module.css";
import Button from "../button/Button";
import devVideo from "../../assets/video/computer.mp4";

const SectionDev = () => {
  return (
    <>
      <div className={styles.devContainer}>
        <figure className={styles.devFigure}>
          <figcaption className={styles.devFigcaption}>
            <h2>Udviklingen af mobilkommunikation.</h2>
            <Link to="/development">
              <Button buttonText="Se mere" />
            </Link>
          </figcaption>
          <div className={styles.videoWrapper}>
            <video autoPlay loop muted className={styles.devVideo}>
              <source src={devVideo} type="video/mp4" />
            </video>
          </div>
        </figure>
      </div>
    </>
  );
};

export default SectionDev;
