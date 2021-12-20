import { Button, Layout } from "antd";
import { Link } from "react-router-dom";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "./index.module.css";

const { Header } = Layout;

const HeaderSection:React.FC =() => {
  function openNav() {
    console.log("Clicked here");
    let x: any = document.getElementById("myNav");
    x.style.height = "100%";
  }

  function closeNav() {
    let x: any = document.getElementById("myNav");
    x.style.height = "0%";
  }
  return (
    <div>
      <Header>
        <div style={{display: "flex"}} className={styles.actualMenu}>
          <Link to="/">
            <Button type="text">Space</Button>
          </Link>
          <div className={styles.buttons}>
            <Link to="/">
              <Button type="text">Home</Button>
            </Link>
            <Link to="/">
              <Button type="text">Templates</Button>
            </Link>
            <Link to="/">
              <Button type="text">Price</Button>
            </Link>
            <Link to="/">
              <Button type="text">Help</Button>
            </Link>
            <Link to="/">
              <Button>Get In Touch</Button>
            </Link>
          </div>
        </div>

        <MenuUnfoldOutlined className={styles.mobileMenu} onClick={openNav} />
        <div id="myNav" className={styles.overlayMobile}>
          <button className={styles.closebtn} onClick={closeNav}>
            &times;
          </button>
          <Link className={styles.overlayMobileContent} to="/">
            <Button type="text">Home</Button>
          </Link>
          <Link className={styles.overlayMobileContent} to="/">
            <Button type="text">Templates</Button>
          </Link>
          <Link className={styles.overlayMobileContent} to="/">
            <Button type="text">Price</Button>
          </Link>
          <Link className={styles.overlayMobileContent} to="/">
            <Button type="text">Help</Button>
          </Link>
          <Link className={styles.overlayMobileContent} to="/">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </Header>
    </div>
  );
}

export default HeaderSection;
