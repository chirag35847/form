import { useState } from "react";
import Input from "./Input";
import {isEmail, isNotEmpty} from '../util/validation';
import useInput from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue, handleInputChange, handleInputBlur, hasError
  } = useInput('', (value) => isEmail && isNotEmpty(value))

  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: ""
  })

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const isEmailInValid = ((enteredValue.email !== '' && !isEmail(enteredValue.email)) || (enteredValue.email === '')) && didEdit.email === true;
  const isPasswordInValid = ((enteredValue.password !== '' && enteredValue.password.length < 6) || (enteredValue.password === '')) && didEdit.password === true;

  console.log(isEmailInValid,isEmail(enteredValue.email), didEdit.email)

  function handleFieldChange(type, value) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [type]: value
    }))

    setDidEdit((prevState) => ({
      ...prevState,
      [type]: false,
    }))
  }

  function handleBlurEvent(type) {
    setDidEdit((prevState) => ({
      ...prevState,
      [type]: true,
    }))
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (isPasswordInValid || isEmailInValid) {
      return;
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          onBlur={handleInputBlur}
          type="email"
          name="email"
          onChange={handleInputChange}
          value={emailValue}
          error={hasError ? "Please enter valid email" :""}
        />

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onBlur={(e) => handleBlurEvent('password')} id="password" type="password" name="password" onChange={(e) => handleFieldChange('password', e.target.value)} value={enteredValue.password} />
          <div className="control-error">
            {isPasswordInValid && <p>Please enter a valid password</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
