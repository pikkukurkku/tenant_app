import React from "react";
import InputForm from "../components/InputForm";

const Name: React.FC = () => {
  return (
      <InputForm
          label="Name"
          type="name"
          name="name"
          placeholder="Your name and surname"
          localStorageKey="name"
          nextRoute="/email"
      />
  );
};

export default Name;
