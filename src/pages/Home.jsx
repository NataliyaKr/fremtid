import PageHeader from "../components/pageHeader/PageHeader";
import SectionFuture from "../components/sectionFuture/SectionFuture";
import FutureImg from "../assets/images/img1.jpg";
const Home = () => {
  return (
    <article>
      <PageHeader />
      <SectionFuture futureImg={FutureImg} />
    </article>
  );
};

export default Home;
