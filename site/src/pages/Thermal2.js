import React from "react";
import Data from "../Data1.json";
import img from "../images/img8.jpeg";
import Back from "../components/Back";
import Heading from "../components/Heading";
function Thermal2() {
  return (
    <div id="Thermalpage" className="Thermal">
      <Back name="Thermal" title="Thermal Validation" cover={img} />
      <div className="containerflexmtop">
        <div className="Contents">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <br />
            <p>{Data.data.Thermal.Intro1}</p>
            <p>{Data.data.Thermal.Intro2}</p>

            <br />
            <ul className="Thermal-list">
              <li>{Data.data.Thermal.Content1}</li>
              <li>{Data.data.Thermal.Content2}</li>
              <li>{Data.data.Thermal.Content3}</li>
              <li>{Data.data.Thermal.Content4}</li>
              <li>{Data.data.Thermal.Content5}</li>
              <li>{Data.data.Thermal.Content6}</li>
              <li>{Data.data.Thermal.Content7}</li>
            </ul>
            <br />
            <p>{Data.data.Thermal.Conclusion}</p>
            <br />
            <br />
          </div>
        </div>
        <div className="right row">
        <img
          src={process.env.PUBLIC_URL + "/th.jpg"}
          alt="LOADING"
          style={{ height: 250, width: 250, float: "right", marginLeft: "20%", marginTop: '30%' }}
        />
        </div>
      </div>
    </div>
  );
}

export default Thermal2;
