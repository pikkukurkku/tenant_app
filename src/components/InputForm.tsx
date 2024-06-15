import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../contexts/useProgress";
import 'bootstrap/dist/css/bootstrap.min.css';
import './InputForm.css'

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
  const navigate = useNavigate();
  const { progress, setProgress } = useProgress();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem(localStorageKey, type === "radio" ? selectedOption : inputValue);
    setProgress((prevProgress) => Math.min(prevProgress + 20, 100));
    navigate(nextRoute);
  };

  return (
    <div className={name}>
      <form className="form" onSubmit={handleSubmit}>

     
        <label>{label}</label>
        {type === "text" && (
        <input
          className="nameInput"
          type="text"
          name={name}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          required
        />
        )}
        {type === "radio" && (
            <div>
            {options &&
              options.map((option) => (
                <div key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    name={name}
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => setSelectedOption(option.value)}
                    required
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
          </div>
        )}

<div className="progress">
  <div
    className="progress-bar"
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

        <div className="buttons">
        <button type="button">Go back</button>
        <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
