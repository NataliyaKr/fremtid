import PageHeader from "../components/pageHeader/PageHeader";
import SecBenefits from "../components/sectionBenefits/SecBenefits";
import SectionDev from "../components/sectionDev/SectionDev";
import SectionFuture from "../components/sectionFuture/SectionFuture";
import SecPerspectives from "../components/sectionPerspectives/SecPerspectives";
import SecUse from "../components/sectionUse/SecUse";

const Home = () => {
  return (
    <article>
      <PageHeader />
      <SectionFuture />
      <SectionDev />
      <SecBenefits />
      <SecUse />
      <SecPerspectives />
    </article>
  );
};

export default Home;
