import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import context from "../context/Context";

function Login() {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [isBtnDisabled, setIsBtnDisabled ] = useState(true);
  const { setEmailContext } = useContext(context)

  const onEmailChange = ({target}) => {
    const { value } = target;
    setEmail(value)
    verifyBtn()
  }

  const onPasswordChange = ({target}) => {
    const { value } = target;
    setPassword(value)
    verifyBtn()
  }

  const handleBtn = () => {
    setEmailContext(email);
  }

  const verifyBtn = () => {
    const PASSWORD_LENGTH = 6;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = regex.test(email);
    const verifyPassword = password.length >= PASSWORD_LENGTH;
    setIsBtnDisabled(!(verifyEmail && verifyPassword));
  };

  return (
    <section>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={ email }
          name="email"
          onChange={ onEmailChange }
        />
        <input
          type="password"
          value={ password }
          name="password"
          onChange={ onPasswordChange }
        />
        <Link to="/animes">
          <button
            type="button"
            name="Entrar"
            disabled={ isBtnDisabled }
            onClick={ handleBtn }
          >
            Entrar            
          </button>
        </Link>
      </form>
      
    </section>
  )
}

export default Login;
