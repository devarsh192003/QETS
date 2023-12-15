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

      <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
      <CardsGridmain/>

      </>
    );
}

export default Home;