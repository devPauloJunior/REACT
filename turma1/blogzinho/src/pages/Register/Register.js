// MEU CSS
import styles from "./Register.module.css";

// MEUS IMPORTS
import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = { 
      displayName, 
      email, 
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }    
  
    const res = await createUser(user);
  
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={ `${styles.register} container` }>
        <h1>Cadastre-se para postar seu conteúdo</h1>
        <p>Crie seu usuário e compartilhe suas histórias.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input 
            type="text" 
            name="displayName" 
            required 
            placeholder="Nome de usuário"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            />
          </label>
          <label>
            <span>E-mail: </span>
            <input 
            type="email" 
            name="email" 
            required 
            placeholder="E-mail de acesso"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
          </label>
          <label>
            <span>Senha: </span>
            <input 
            type="password" 
            name="password" 
            required 
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
          </label>
          <label>
            <span>Conformação de Senha: </span>
            <input 
            type="password" 
            name="confirmPassword" 
            required 
            placeholder="Confirme a sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            />
          </label>
          {!loading && <button className='btn btn-success my-4'>Entrar</button>}
          {loading && <button className='btn btn-success my-4' disabled >Aguarde...</button> }
          { error && <p className={ `${styles.error} text-danger` }>{ error }</p> }
        </form>

    </div>
  );
};

export default Register;