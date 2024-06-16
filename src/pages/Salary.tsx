import React from "react";
import InputForm from "../components/InputForm";

const Salary: React.FC = () => {
  const salaryOptions = [
    { value: "0 - 1.000", label: "0 - 1.000" },
    { value: "1.000 - 2.000", label: "1.000 - 2.000" },
    { value: "2.000 - 3.000", label: "2.000 - 3.000" },
    { value: "3.000 - 4.000", label: "3.000 - 4.000" },
    { value: "Mehr als 4.000", label: "Mehr als 4.000" },
  ];

  return (
    <InputForm
      label="Dein Gehalt"
      type="radio"
      name="salary"
      options={salaryOptions}
      localStorageKey="salary"
      nextRoute="/summary"
    />
  );
};

export default Salary;
