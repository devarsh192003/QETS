import React from "react";
import "./CardsGrid.css"; 
import plan from "../images/plan.svg";
import factory from "../images/factory.svg";
import mechanical from "../images/mechanical.svg";
import tools from "../images/tools.svg";
import engineer from "../images/engineer.svg";
import machinery from "../images/machinery.svg";
import machine from "../images/machine.svg";
import manometer from "../images/manometer.svg"
function CardsGrid() {
  return (
    <div className="cardcontainer">
      <div class="cardcontainer">
        
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={engineer} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>3-D Services</h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={machinery} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
               Mechnaical Equipments
              </h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={mechanical} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>Calibaration Services</h3>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={machine} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>Product Sales</h3>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={plan} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>Planning & Documentation</h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={factory} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
               Validation Services
              </h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={manometer} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
               Manufacutring
              </h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={tools} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
                Mechanical
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsGrid;
