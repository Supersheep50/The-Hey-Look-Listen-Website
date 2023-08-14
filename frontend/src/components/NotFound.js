import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";


// Code adapted from Code Institute walkthrough

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`You seem a little lost?`}
      />
    </div>
  );
};

export default NotFound;