import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./login-content.scss";
const LoginContent = () => {
  const navigate = useNavigate("");

  const { setToken } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = (evt) => { 
    evt.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (emailValue && passwordValue) {
      setLoading(true);
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setToken(data.token);
          navigate("/");
        })
        .catch((e) => setError(e.message))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <h1>login</h1>
      <input className="login-input__email" ref={emailRef} type="email" placeholder="Email" />
      <input className="login-input__password" ref={passwordRef} type="password" placeholder="Password" />
      <button className="login-btn" disabled={loading} type="submit">
        Submit
      </button>
      <span style={{ color: "red" }}>{error}</span>
    </form>
  );
};

export default LoginContent;
