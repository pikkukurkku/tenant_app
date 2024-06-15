import React from "react";
import InputForm from "../components/InputForm";
import './Name.css'

const Name: React.FC = () => {
  return (
    <div>
      <p>Please fill in the required data:</p>
      <InputForm
          label="Name"
          type="text"
          name="name"
          placeholder="Your name and surname"
          localStorageKey="name"
          nextRoute="/email"
      />
      </div>
  );
};

export default Name;
