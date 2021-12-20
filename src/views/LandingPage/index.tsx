import DesignConcepts from "../../components/DesignConcepts";
import Requirements from "../../components/Requirements";

import Footer from "../../components/Footer";
import HeaderSection from "../../components/HeaderSection";
import LandingSection from "../../components/LandingSection";
import Testimonials from "../../components/Testimonials";
import styles from './index.module.css';
import DesignDescription from "../../components/DesignDescription";
const LandingPage:React.FC = () => {
  return (
    <div className={styles.LandingPage}>
      <HeaderSection />
      <LandingSection />
      <Requirements/>
      <DesignConcepts />
      <DesignDescription/>
      <Footer />
    </div>
  );
}

export default LandingPage;
