
import React from 'react';

const TableComponent = ({ yearlyData }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Yearly Interest</th>
          <th>Savings End of Year</th>
          <th>Yearly Contribution</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{data.yearlyInterest}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyContribution}</td>
            <td>{data.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

