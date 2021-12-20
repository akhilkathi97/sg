import { Card } from "antd";
import styles from './index.module.css';
const DesignConcepts:React.FC = () =>{
  let carouselText: any[] = [
    {
      text: "Sunday Grids is awesome. Use it before you start",
      from: "Yash",
      role: "Employee, Company",
    },
    {
      text: "Every single paper is reused before recycled",
      from: "Andy Ford",
      role: "CFO, Whatever",
    },
    {
      text: "Every single paper is reused before recycled",
      from: "Andy Ford",
      role: "CFO, Whatever",
    },
    {
      text: "Less stressed because we are using books",
      from: "John Doe",
      role: "CEO, Company",
    },
  ];
  return (
    <div style={{display: 'flex'}} className={styles.slides}>
        {carouselText.map((item: any, index: number) => {
          return (
              <Card key={index} style={{margin:"2%"}}  className={styles.card}>
                <h4>{item.text}</h4>
                <img src="" alt="userImage"/>
                <p>{item.from}</p>
              </Card>
          );
        })}
    </div>
  );
}

export default DesignConcepts;
