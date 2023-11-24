import { useNavigate } from 'react-router-dom';
import '../login.css'
import { Button } from '@mui/material';
import { apiClient } from '../components/Axiosclients';
import { useState } from 'react';

type CadastroData = {
  message: string , status_code: number, email?: string
}

function cadastro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const Cadastro = async (): Promise<CadastroData> => {
    const response = await apiClient.post<CadastroData>("/sidi_ponto/v1/cadastro",{
      email:email,
      name:name
    });
    return response.data; 
  }

  return (
  <><div id='conteudo'>
      <img id='logo' src="imagens/logo.png" alt="" />

      <br />

      <div id='links_login'>
        <ul><li><a href="/">Login</a></li></ul>
        <ul><li><a href="Cadastro">Cadastra</a></li></ul>
      </div>

      <div id='inputs_LoginCadastro'>
        <input onChange={event => {setName(event.target.value);}}  type="text" placeholder='nome' /><br />
        <input onChange={event => {setEmail(event.target.value);}} type="text" placeholder='Email' />

      </div>

      <br />

      <Button  type='button' onClick={() => Cadastro() }variant='contained' id='botão_login'>
        <a href="cadastro_2" id='link'>next</a>
      </Button><br />

    </div><div id='detalhe'>

      </div></>
  )
}

export default cadastro