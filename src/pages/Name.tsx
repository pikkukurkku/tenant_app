import React from "react";
import InputForm from "../components/InputForm";

const Name: React.FC = () => {
  return (
    <div>
      <InputForm
          label="Vor- und Nachname"
          type="text"
          name="name"
          placeholder="Vor- und Nachname"
          localStorageKey="name"
          nextRoute="/email"
      />
      </div>
  );
};

export default Name;
