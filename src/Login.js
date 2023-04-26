import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign in</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Internet-Based Ads Notice.
        </p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;