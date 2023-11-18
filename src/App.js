import React, { useState } from "react";
import Form from "./Form";
import Title from "./Title";
import TableComponent from "./TableComponent";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (calculatedData) => {
    setYearlyData(calculatedData);
    setFormSubmitted(true);
  };

  const handleFormReset = () => {
    setYearlyData([]);
    setFormSubmitted(false);
  };

  return (
    <div>
      <Title />
      <Form onSubmit={handleFormSubmit} onReset={handleFormReset} />
      {!formSubmitted && <p className="center-text">No Investment Calculated Yet.</p>}
      {formSubmitted && <TableComponent yearlyData={yearlyData} />}
    </div>
  );
}

export default App;
