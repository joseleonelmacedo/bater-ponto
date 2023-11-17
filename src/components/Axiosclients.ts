import axios from 'axios';

const handleLogin = async () => {
    try {
       const response = await axios.post('http://seu-servidor-flask/sidi_ponto/v1/login', {
          email: 'leonel@gmail.com',
          password: '1234'
       });
 
       console.log(response.data);
    } catch (error) {
       console.error('Erro na solicitação de login:', error);
    }
 };
