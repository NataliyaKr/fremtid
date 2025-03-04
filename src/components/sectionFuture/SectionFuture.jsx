import styles from "./sectionFuture.module.css";

const SectionFuture = ({ title, futureImg }) => {
  return (
    <article
      className={styles.future}
      style={{ backgroundImage: `url(${futureImg})` }}
    >
      <div className={styles.futureContent}>
        <h1>{title}</h1>
      </div>
    </article>
  );
};

export default SectionFuture;
