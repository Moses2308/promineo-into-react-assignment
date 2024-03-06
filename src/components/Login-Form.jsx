import React from "react";
class LoginForm extends React.Component {
  render() {
    return (
      <>
        <div className="form-container">
          <h3>Log In</h3>
          <form action="">
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}
export default LoginForm;
