import { useParams } from "react-router-dom";
import { articleTmpl } from "../articleTmpl/ArticleTmpl.jsx";
import { useEffect, useState } from "react";
//import { fetchArticles } from "../fetchData/FetchData.jsx";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articles = await fetchArticles();
        console.log("Fetched articles:", articles);
        const foundArticle = articles.find((a) => String(a.id) === id);
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError("Article with ID ${id} not found");
        }
      } catch (error) {
        setError("Error fetching article. ${error.message}");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return <div>{article ? articleTmpl(article) : <p>Article not found</p>}</div>;
};

export default ArticlePage;
