'use client';

import { useState, useEffect } from 'react';
import style from './page.module.css';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LoginServicos() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/servicos');
    }
  }, []);

  async function login() {
    setErro('');
    const resposta = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        senha
      })
    });
    const dados = await resposta.json();
    if (dados.token) {
      localStorage.setItem('token', dados.token);
      router.push('/servicos');
    } else {
      setErro(dados);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.all}>
    <div className={style.container}>
      <div className={style.wrapLogin}>
        <form className={style.loginForm}>

        <span className={style.loginFormImage}>
            <img src="/senaiLogo.png" className={style.img} />
          </span>

          <span className={style.loginFormTitle}> Alunos e Funcionários </span>

         

          <div className={style.wrapInput}>
            <input
              className={email !== "" ? `${style.hasVal} ${style.input}` : style.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={style.focusInput} data-placeholder="E-mail"></span>
          </div>

          <div className={style.wrapInput}>
            <input
              className={senha !== "" ? `${style.hasVal} ${style.input}` : style.input}
              type={showPassword ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className={style.focusInput} data-placeholder="Senha"></span>
            <button
              type="button"
              className={style.toggleButton}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className={style.containerLoginFormBtn}>
            <button className={style.loginFormBtn} onClick={login}>Entrar</button>
          </div>


          {erro && <p>{erro}</p>}
        </form>
      </div>
    </div>
    </div>
  );
}