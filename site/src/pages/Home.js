import React from "react";
import Hero from "../components/Hero";
import styles from "../components/styles";
import CardsGridmain from "./CardsGridmain";
import Heading from "../components/Heading";
function Home() {
    return (
      <>
        <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          
        </div>
        
      </div>
      <br/ >
      <br/ >

      <Heading title='Our Main Services' subtitle='Check out what QETS offers to you!' />
      <CardsGridmain/>

      </>
    );
}

export default Home;