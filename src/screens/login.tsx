import { useNavigate, Link } from 'react-router-dom';

import { Button } from '@mui/material';
import '../login.css'
import { apiClient } from '../components/Axiosclients';
import { useState } from 'react';

type LoginData = {
  message: string , status_code: number, email?: string
}

function Login() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const login = async (): Promise<LoginData> => {
    const response = await apiClient.post<LoginData>("/sidi_ponto/v1/login",{
      email:email,
      senha:senha
    });
    return response.data; 
  }
  
    const navigate = useNavigate();
    return (
    <>
    
    <div id='conteudo'>
        <img id='logo' src="imagens/logo.png" alt="" />

        <br />
        

        <div id='links_login'>
          <ul><li><a href="">Login</a></li></ul>
          <ul><li><a href="Cadastro">Cadastra</a></li></ul>
        </div>

        <div id='inputs_LoginCadastro'>
          <input onChange={event => {setEmail(event.target.value);}} type="text" placeholder='Email' /><br />
          <input onChange={event => {setSenha(event.target.value);}} type="password" placeholder='Senha' />

        </div>

        <br />

        <Button type='button' onClick={() => login()} variant='contained' id='botão_login'>
        <Link to="home" id='link'>next</Link>
        </Button><br />
        <div id='esqueci_senha'>
          <a href="">Esqueci Senha</a>
        </div>
      
      </div>
      
      <div id='detalhe'>
        
      </div>
      </>
    )
  }
  
  export default Login