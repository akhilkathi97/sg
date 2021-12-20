import { Card } from "antd";

const DesignDescription: React.FC = () => {
  let description: any[] = [
    {
      header: "Design COncept",
      description:
        "The design concept is advanced and sophisticated and flexible for beginners and pro people.",
    },
    {
      header: "Developing Websites",
      description:
        "The design concept is advanced and sophisticated and flexible for beginners and pro people.",
    },
    {
      header: "Design Concept",
      description:
        "The design concept is advanced and sophisticated and flexible for beginners and pro people.",
    },
    {
      header: "Design COncept",
      description:
        "The design concept is advanced and sophisticated and flexible for beginners and pro people.",
    },
  ];
  return (
    <div style={{ margin: "0 2%" }}>
      <h3>The best design studio for the website building</h3>
      <p>
        This is an awesome website to build responsive and fluid apps on the
        fly. It is easy and simple to translate apps to native language just by
        doing something
      </p>
      <div style={{display: "flex"}}>
        <div style={{margin: "0 1%"}}>
          <>
            <h4>{description[0].header}</h4>
            <p>{description[0].description}</p>
          </>
          <>
            <h4>{description[1].header}</h4>
            <p>{description[1].description}</p>
          </>
        </div>
        <div style={{margin: "0 1%"}}>
          <>
            <h4>{description[2].header}</h4>
            <p>{description[2].description}</p>
          </>
          <>
            <h4>{description[3].header}</h4>
            <p>{description[3].description}</p>
          </>
        </div>
      </div>
    </div>
  );
};
export default DesignDescription;
