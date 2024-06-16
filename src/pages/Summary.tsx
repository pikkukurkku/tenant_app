import React, { useEffect, useState } from "react";

const Summary: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const storedPhone = localStorage.getItem("phone number");
    if (storedPhone) {
      setPhone(storedPhone);
    }

    const storedSalary = localStorage.getItem("salary");
    if (storedSalary) {
      setSalary(storedSalary);
    }
  }, []);

  return (
    <div>
      <h1>Deine persönliche Daten</h1>
      <p>
        <strong>Vor- und Nachname:</strong> {name}
      </p>
      <p>
        <strong>E-mail:</strong> {email}
      </p>
      <p>
        <strong>Telefon-Nummer:</strong> {phone}
      </p>
      <p>
        <strong>Gehalt:</strong> {salary}
      </p>
    </div>
  );
};

export default Summary;
