import React from "react";
import InputForm from "../components/InputForm";

const Email: React.FC = () => {
  return (
      <InputForm
          label="E-mail"
          type="text"
          name="email"
          placeholder="Deine E-Mail-Adresse"
          localStorageKey="email"
          nextRoute="/phone"
      />
  );
};


export default Email;