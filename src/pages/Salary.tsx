import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Salary () {
    const [salary, setSalary] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("salary", salary);
        navigate("/summary")
      };
    return (
<div className="Salary">
<form className="form" onSubmit={handleSubmit}>
        <label>Your current salary</label>
        <input
          type="radio"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <button>Go back</button>
        <button type="submit">Continue</button>
      </form>

</div>
)}

export default Salary;