import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css'


const Home: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const logInClick = (): void => {
    if (errorMessage) {
      setErrorMessage("");
    } else {
      setErrorMessage("This button does not do anything, only demo :)");
    }
  }
  
  return (
    <div className="Home">
      <span>Home ist jetzt Buena</span>
      <div className={styles["navbar"]}>
      <div className={styles["navbar-btns"]}>
        <button onClick={logInClick} className={styles["einloggen"]}>Einloggen</button>
        <p className={styles["regular"]}>So funktioniert's</p>
        <p className={styles["regular"]}>Über Buena</p>
        <p className={styles["regular"]}>Jobs</p>
        </div>
        <img src="./buena_logo.png" alt="buena logo" />
      </div>
      {errorMessage && 
              <p className={styles["errorMsg"]}>{errorMessage}</p>}
        
      <section>
      <p className={styles["register"]}>Registriere dich bei Buena und beginne mit der Wohnungssuche</p>
      <Link to="/name">
        <button className={styles["button"]}>Los geht's</button>
      </Link>
      </section>
      <div className={styles["video-container"]}>
      <video className={styles["video"]} src="./buena_video.mp4" controls></video>
      </div>
    </div>
  );
}

export default Home;
