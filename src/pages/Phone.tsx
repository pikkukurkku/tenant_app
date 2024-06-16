import React from "react";
import InputForm from "../components/InputForm";

const Phone: React.FC = () => {
    return (
        <InputForm
            label="Telefonnummer"
            type="text"
            name="phone"
            placeholder="Deine Handynummer"
            localStorageKey="phone number"
            nextRoute="/salary"
        />
    );
  };


export default Phone;