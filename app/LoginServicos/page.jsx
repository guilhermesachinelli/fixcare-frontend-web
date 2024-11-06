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

<<<<<<< HEAD
  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/servicos');
    }
  }, []);
=======
    const fetchLogin = async (e) => {
        e.preventDefault();
        
        const response1 = await fetch('http://10.88.200.152:4000/aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha: password,
>>>>>>> c34e3fe2b4fb8c0e57783d288fcc39d7601fd88a

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

<<<<<<< HEAD
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
=======
        const response2 = await fetch('http://10.88.200.152:4000/funcionario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                senha: password,
>>>>>>> c34e3fe2b4fb8c0e57783d288fcc39d7601fd88a

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