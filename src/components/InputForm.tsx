import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [errorMessage, setErrorMessage] = useState<string>("")
  const navigate = useNavigate();
  const { progress, setProgress, decreaseProgress } = useProgress();

  const validateInput = (value: string) => {

    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regex.test(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "name" && type === "text" && !validateInput(inputValue)) {
      setErrorMessage('Please enter a valid name and surname separated by a space.');
      return;
    }

    localStorage.setItem(
      localStorageKey,
      type === "radio" ? selectedOption : inputValue
    );
    setProgress((prevProgress) => Math.min(prevProgress + 20, 100));
    navigate(nextRoute);
  };

  const handleBack = () => {
    decreaseProgress();
    window.history.back();
  };

  const toHomePage = () => {
    window.location.href = "/";
  };

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
        <label>{label}</label>
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
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
