import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import AccountContext from "../store/account-store";

const Login = () => {
  const { setEmail, setPassword, setUserName } = useContext(AccountContext);
  const userNameElement = useRef();
  const emailElement = useRef();
  const passwordElement = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userNameInput = userNameElement.current.value;
    const emailInput = emailElement.current.value;
    const passwordInput = passwordElement.current.value;

    setUserName(userNameInput);
    setPassword(passwordInput);
    setEmail(emailInput);

    userNameElement.current.value = "";
    emailElement.current.value = "";
    passwordElement.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <img
        className="mb-4"
        src="/docs/5.3/assets/brand/bootstrap-logo.svg"
        alt=""
        width="72"
        height="57"
      />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input
          required
          ref={userNameElement}
          type="text"
          className="form-control"
          placeholder="Enter your name."
        />
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating">
        <input
          required
          ref={emailElement}
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          required
          ref={passwordElement}
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="form-check text-start my-3">
        <input
          className="form-check-input"
          type="checkbox"
          value="remember-me"
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
    </form>
  );
};

export default Login;
