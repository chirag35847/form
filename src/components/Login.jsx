import { useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState("");
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: ""
  })

  // function handleEmailChange(event){
  //   setEmail(event.target.value);
  // }

  // function handlePasswordChange(event){
  //   setPassword(event.target.value);
  // }

  function handleFieldChange(type,  value) {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [type]: value
    }))
  }

  function handleFormSubmit(event){
    event.preventDefault();

    console.log(enteredValue)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e)=>handleFieldChange('email', e.target.value)} value={enteredValue.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(e)=>handleFieldChange('password', e.target.value)} value={enteredValue.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
