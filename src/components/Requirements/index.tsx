import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
function Requirements() {
  return (
    <div style={{margin:"2vw 0"}}>
      <div style={{ display: "flex" }}>
        <img src={img1} alt="" style={{ width: "12vw", margin:"3vw" }}/>
        <div>
          <h3>Requirement gathering and analysis for references</h3>
          <p>
            Investment is subject to market risks. Please read all scheme
            related documents very carefully. Sensex tanks by 1000 points due to
            fear of omnicron virus.
          </p>
          <img src={img2} alt="" style={{ width: "25vw",margin:"0 0 0 25%"  }} />
        </div>
      </div>
      
    </div>
  );
}
export default Requirements;
