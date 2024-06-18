import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useProgress } from "../contexts/useProgress";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./InputForm.module.css";

interface InputFormProps {
  label: string;
  type: "text" | "radio";
  name: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  localStorageKey: string;
  nextRoute: string;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  type,
  name,
  placeholder,
  options,
  localStorageKey,
  nextRoute,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const { progress, increaseProgress, decreaseProgress, resetProgress } =
    useProgress();

  const validateInput = (name: string, value: string) => {
    if (name === "name") {
      const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
      return regex.test(value);
    } else if (name === "email") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(value);
    } else if (name === "phone") {
      const regex = /^[0-9]+$/;
      return regex.test(value);
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (type === "text" && !validateInput(name, inputValue)) {
      if (name === "name") {
      setErrorMessage(
        "Please enter a valid name and surname separated by a space. Please do not use special signs"
      );
    } else if (name === "email") {
      setErrorMessage("Please enter a valid email address.");
    } else if (name === "phone") {
      setErrorMessage("Please enter a valid phone number.");
    }
    return;
  }

    localStorage.setItem(
      localStorageKey,
      type === "radio" ? selectedOption : inputValue
    );
    increaseProgress();
    navigate(nextRoute);
  };

  const handleBack = (): void => {
    decreaseProgress();
    window.history.back();
  };

  const toHomePage = (): void => {
    resetProgress();
    navigate("/");
  };

  useEffect(() => {
    if (location.pathname === "/") {
      resetProgress();
    }
  }, [location.pathname, resetProgress]);

  return (
    <div className={name}>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <img
          src="../buena_logo.png"
          alt="buena-logo"
          className={styles["grow"]}
          onClick={toHomePage}
        />
        <p className={styles["par"]}>
          Bitte trage die erforderlichen Daten ein:
        </p>
        <label className={styles["label"]}>{label}</label>
        {type === "text" && (
          <>
            <input
              className={styles["nameInput"]}
              type="text"
              name={name}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder}
              required
            />
            {errorMessage && <p className={styles["error"]}>{errorMessage}</p>}
          </>
        )}
        {type === "radio" && (
          <div className={styles["radioGroup"]}>
            {options &&
              options.map((option) => (
                <div key={option.value} className={styles["radioOption"]}>
                  <input
                    type="radio"
                    id={option.value}
                    name={name}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => setSelectedOption(option.value)}
                    required
                    className={styles["radioInput"]}
                  />
                  <label
                    htmlFor={option.value}
                    className={styles["radioLabel"]}
                  ></label>
                  {option.label}
                </div>
              ))}
          </div>
        )}

        <div className={styles["progress"]}>
          <div
            className={`progress-bar ${styles["custom"]}`}
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>

        <div className={styles["buttons"]}>
          <button onClick={handleBack} className={styles["back"]} type="button">
            Zurück
          </button>
          <button className={styles["button"]} type="submit">
            Weiter
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
