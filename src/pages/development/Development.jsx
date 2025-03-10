import styles from "./development.module.css";
import devImg from "../../assets/images/img3.jpg";

const Development = () => {
  return (
    <>
      <article>
        <div className={styles.devPageContainer}>
          <h2 className={styles.devTitle}>
            Udviklingen af mobilkommunikation.
          </h2>
          <img className={styles.devImg} src={devImg} alt="1g-6g" />
          <p className={styles.devText}>
            Siden introduktionen af 1G i 1980'erne har hver generation af
            mobilkommunikation bragt væsentlige ændringer. 2G muliggjorde
            tekstbeskeder, 3G introducerede mobil internet, 4G gjorde streaming
            af video muligt, og 5G øgede hastigheden og reducerede forsinkelser.
            6G vil fortsætte denne udvikling og åbne nye digitale muligheder.
          </p>
        </div>
      </article>
    </>
  );
};

export default Development;
