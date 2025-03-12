import styles from "./articleTmpl.module.css";

export const articleTmpl = (article) => (
  <div className={styles.article}>
    <div className={styles.articleContainer}>
      <div className={styles.articleImage}>
        <img src={article.image} alt="article image" />
      </div>
      <div className={styles.articleTextContainer}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p>{article.description}</p>
        <p>{article.description1}</p>
        <p>{article.global_competition}</p>
      </div>
    </div>
  </div>
);
