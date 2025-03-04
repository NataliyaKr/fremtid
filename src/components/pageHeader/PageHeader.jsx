import styles from "./pageHeader.module.css";
import Video from "../../assets/video/earth.mp4";

const PageHeader = () => {
  return (
    <header className={styles.header}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src={Video} type="video/mp4" />
      </video>
    </header>
  );
};

export default PageHeader;
