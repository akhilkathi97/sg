import { Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
const Footer:React.FC =()=> {
  const pages: string[] = ["Prices", "Templates", "Help", "Get In Touch"];
  const demos: string[] = ["Dark", "Light", "Classic"];
  const resources: string[] = ["Documentation"];

  return (
    <div className={styles.footer}>
      <div className={styles.description}>
        <h1>Space</h1>
        <p>
          The best design for your web application. You can do amazing things
          with this application.It contains a dummy landing page with different
          components. The objective is to translate the same into either ReactJs
          framework by keeping the page responsive and the mobile layout has to
          be implemented by you.
        </p>
      </div>
      <div>
        <h3>Pages</h3>
        <ul>

          {pages.map((page: string,index:any) => {
            return (
              <li key={index}>
                <Link to={page}>
                  <Button type="text">{page}</Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Demos</h3>
        <ul>
          {demos.map((demo: string,index:number) => {
            return (
              <li key={index} >
                <Link to={demo}>
                  <Button type="text">{demo}</Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul>
          {resources.map((resource: string,index:number) => {
            return (
              <li key={index}>
                <Link to={resource}>
                  <Button type="text">{resource}</Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
