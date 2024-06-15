import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface InputFormProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    localStorageKey: string;
    nextRoute: string;
}

const InputForm: React.FC<InputFormProps> = ({ label, type, name, placeholder, localStorageKey, nextRoute }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem(localStorageKey, inputValue);
        navigate(nextRoute);
    };

    return (
        <div className={name}>
            <form className="form" onSubmit={handleSubmit}>
                <label>{label}</label>
                <input
                    className="form-control mb-4"
                    type={type}
                    name={name}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder}
                    required
                />
                <button type="button">Go back</button>
                <button type="submit">Continue</button>
            </form>
        </div>
    );
};

export default InputForm;
