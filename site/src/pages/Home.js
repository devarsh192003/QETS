import React from "react";
import Hero from "../components/Hero";
import styles from "../components/styles";

function Home() {
    return (
        <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
    
        </div>
      </div>
    );
}

export default Home;