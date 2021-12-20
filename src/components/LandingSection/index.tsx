import { Button } from "antd";
import bg from "../../assets/bg.jpg";
import styles from "./index.module.css";
const LandingSection:React.FC = () => {
  return (
    <div className={styles.LandingSection}>
      <div>
        <h1>Convallis turpis erat tempus, viverra aliquet</h1>
        <Button className={styles.getInTouch}>Get in Touch</Button>
      </div>
      <img src={bg} alt="landingImage"></img>
    </div>
  );
}

export default LandingSection;
