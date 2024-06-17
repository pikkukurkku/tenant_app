import React, { useEffect, useState } from "react";
import styles from './Summary.module.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useProgress } from "../contexts/useProgress";

const Summary: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const {  resetProgress } = useProgress();



  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const storedPhone = localStorage.getItem("phone number");
    if (storedPhone) {
      setPhone(storedPhone);
    }

    const storedSalary = localStorage.getItem("salary");
    if (storedSalary) {
      setSalary(storedSalary);
    }
  }, []);

  const toHomePage = () => {
    resetProgress();
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      resetProgress(); 
    }
  }, [location.pathname, resetProgress]);

  return (
    <div className={styles["summary"]}>
    <span className={styles["header"]}>Deine persönliche Daten</span>
    <div className={styles["data-container"]}>
    <table className={styles["data"]}>
      <tbody>
        <tr>
          <th>Vor- und Nachname:</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>E-mail:</th>
          <td>{email}</td>
        </tr>
        <tr>
          <th>Telefon-Nummer:</th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th>Gehalt:</th>
          <td>{salary}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <img src="./buena_logo.png" className={styles["grow"]} alt="buena logo" onClick={toHomePage} />
  </div>
);
};

export default Summary;
