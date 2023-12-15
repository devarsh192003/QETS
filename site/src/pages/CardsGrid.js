import React from "react";
import "./CardsGrid.css"; 
import engineering from "../images/engineering.svg";
import power from "../images/power.svg";
import fact from "../images/fact.svg";
import oil from "../images/oil.svg";
import gas from "../images/gas.svg";
import telecom from "../images/telecom.svg";
import water from "../images/water.svg";
import pharma from "../images/pharma.svg"
function CardsGrid() {
  return (
    <div className="cardcontainer">
      <div class="cardcontainer">
        
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={telecom} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>Telecom</h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={power} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
               Power & Energy
              </h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={oil} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>Oil and Refinery</h3>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={gas} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>Gas</h3>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={pharma} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>Pharma & Healthcare</h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={engineering} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
                Utitity & Engineering
              </h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={water} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
               Water related
              </h3>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="face face1">
            <div class="content">
              <div class="icon">
                <img className="cardimg" src={fact} alt="factory" />
              </div>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <h3>
                Manufacturing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsGrid;
