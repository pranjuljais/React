import Input from "./component/Input";
import Result from "./component/Result";
import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier,newvalue ) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newvalue,
      };
    });
  }

const inputisvalid = userInput.duration>=1;

return(
  <>
<Input onChangeInput={handleChange} userInput={userInput}></Input>
{inputisvalid ? <Result userInput={userInput}></Result> : <p className="center">Please enter a duration greater than zero.</p>}
  </>
);




}

export default App
