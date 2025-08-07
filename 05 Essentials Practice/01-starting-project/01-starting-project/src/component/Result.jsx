import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {result.map((yeardata) => {
          const totalInterest =
            yeardata.valueEndOfYear -
            yeardata.annualInvestment * yeardata.year -
            initialInvestment;
          const totalAmount = yeardata.valueEndOfYear - totalInterest;
          return(
         <tr key={yeardata.year}>
            <td>{yeardata.year}</td>
            <td>{formatter.format(yeardata.valueEndOfYear)}</td>
            <td>{formatter.format(yeardata.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmount)}</td>
          </tr>);
        })}
      </tbody>
    </table>
  );
}
