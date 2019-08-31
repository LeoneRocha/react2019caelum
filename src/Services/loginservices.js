import React from 'react'
import { Redirect } from 'react-router-dom'

///import './loginPage.css'
import config from '../config'


export function logar(login, senha) {
  
 return   fetch(`${config.apiRoot}/login`, {
        method: 'POST',
        body: JSON.stringify({ login, senha })
      }).then(async (resposta) => {
        // console.log('resposta:', resposta);
        // console.log('resposta.body:', resposta.body); // Readable Stream
  
        // resposta.status === 200
        // if (!resposta.ok) throw new Error();
        const data = await resposta.json();
  
       // if (resposta.ok) {
       //   localStorage.setItem('token', data.token);
       //   this.context.setMensagem('Login efetuado com sucesso! Bem vindo!');
       //   this.props.history.push('/');
      //  } else {
          // console.log(data);
       //   this.setState({ errorMessage: data.message });
       // } 
       return {data, respostaOK: resposta.ok}; 
      }).catch(err => console.log(err)); 

};
 