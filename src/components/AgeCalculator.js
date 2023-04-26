import React, { useState } from "react";
import "./AgeCalculator.css";

function AgeCalculator() {
  const [dob, setDob] = useState(null);
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const handleChange = (e) => {
    setDob(e.target.value);
  };

  const resetHandler = (e) => {
    setDob(null);
    setAge({ years: 0, months: 0, days: 0 });
  };

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (isNaN(years) || isNaN(months) || isNaN(days)) {
      return setAge({ years: 0, months: 0, days: 0 });
    }

    setAge({ years, months, days });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge();
  };

  const { years, months, days } = age;

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dob">Enter your date of birth:</label>
        <input type="date" id="dob" value={dob} onChange={handleChange} />
        <button type="submit">Calculate Age</button>
        <button type="reset" onClick={resetHandler}>
          Reset Date
        </button>
      </form>
      {years > 0 && (
        <div className="age-box">
          <h3>Years</h3>
          <p>{years}</p>
        </div>
      )}
      {months > 0 && (
        <div className="age-box">
          <h3>Months</h3>
          <p>{months}</p>
        </div>
      )}
      {days > 0 && (
        <div className="age-box">
          <h3>Days</h3>
          <p>{days}</p>
        </div>
      )}

      {years > 0 && months === 0 && days === 0 && (
        <p className="birthday-wishes">Happy Birthday!</p>
      )}
    </div>
  );
}

export default AgeCalculator;
