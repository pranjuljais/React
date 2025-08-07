// import Input from "./Input.jsx";
// import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
// import { useState } from "react";

// export default function Login() {
//   const [enteredValues, setEnteredValues] = useState({
//     email: "",
//     password: "",
//   });

//   const [didEdit, setDidEdit] = useState({
//     email: false,
//     password: false,
//   });

//   const emailIsInvalid =
//     didEdit.email &&
//     !isEmail(enteredValues.email) &&
//     !isNotEmpty(enteredValues.email);
//   const passwordIsInvalid =
//     didEdit.password && !hasMinLength(enteredValues.password, 6);

//   function handleSubmit(event) {
//     event.preventDefault();

//     console.log(enteredValues);
//   }

//   function handleInputChange(identifier, value) {
//     setEnteredValues((prev) => ({
//       ...prev,
//       [identifier]: value,
//     }));
//     setDidEdit((prev) => ({
//       ...prev,
//       [identifier]: false,
//     }));
//   }

//   function handleInputBlur(identifier) {
//     setDidEdit((prev) => ({
//       ...prev,
//       [identifier]: true,
//     }));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <Input
//           label="Email"
//           id="email"
//           type="email"
//           name="email"
//           onChange={(event) => handleInputChange("email", event.target.value)}
//           onBlur={() => handleInputBlur("email")}
//           value={enteredValues.email}
//           error={emailIsInvalid && "Please enter a valid email!"}
//         />

//         <Input
//           label="Password"
//           id="password"
//           type="password"
//           name="password"
//           onChange={(event) =>
//             handleInputChange("password", event.target.value)
//           }
//           onBlur={() => handleInputBlur("password")}
//           value={enteredValues.password}
//           error={passwordIsInvalid && "Please enter a valid password!"}
//         />
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat">Reset</button>
//         <button className="button">Login</button>
//       </p>
//     </form>
//   );
// }

//////////////////////////
// method-2

import { useInput } from "../hooks/useInput.js";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    



    
    console.log(enteredValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
