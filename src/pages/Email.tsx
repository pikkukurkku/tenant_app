import React from "react";
import InputForm from "../components/InputForm";

const Email: React.FC = () => {
  return (
      <InputForm
          label="Email"
          type="text"
          name="email"
          placeholder="Your e-mail"
          localStorageKey="email"
          nextRoute="/phone"
      />
  );
};


export default Email;