import React, { useEffect, useState } from "react";

const Summary: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    const storedPhone = localStorage.getItem("phone");
    if (storedPhone) {
      setPhone(storedPhone);
    }
  }, []);

  return (
    <div>
      <h1>Summary</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
};

export default Summary;
