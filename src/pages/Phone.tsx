import React from "react";
import InputForm from "../components/InputForm";

const Phone: React.FC = () => {
    return (
        <InputForm
            label="Phone"
            type="text"
            name="phone"
            placeholder=""
            localStorageKey="phone number"
            nextRoute="/salary"
        />
    );
  };


export default Phone;