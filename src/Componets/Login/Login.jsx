import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviado");
        console.log (username, password);

        alert ("Dados enviados com sucesso!");
    };


    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-field'>
                    <input
                        type='email'
                        placeholder='Digite seu E-mail'
                        onChange={(e) => setUsername(e.target.value)} 
                        />
                    <FaUser className='icon' />
                </div>

                <div className='input-field'>
                    <input
                        type='password'
                        placeholder='Digite sua senha'
                        onChange={(e) => setPassword(e.target.value)}
                         />
                    <FaLock className='icon' />
                </div>

                <div className='recall-forget'>
                    <label>
                        <input type='checkbox' />
                        Lembre-se de mim
                    </label>
                    <a href='#'>Esqueceu sua senha?</a>
                </div>

                <button>Entrar</button>

                <div className='signup-link'>
                    <p>
                        Não possui uma conta? <a href='#'>Registrar</a>
                    </p>

                </div>

            </form>

        </div>

    )
}

export default Login
