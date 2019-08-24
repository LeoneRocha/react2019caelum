import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'


import If from './../../components/If'
import { NotificacaoContext } from './../../contexts/notificacao';

class LoginPage extends Component {

    static contextType = NotificacaoContext;
    state = {
        erroMessage: null

    }

    // LoginFailedMsg = 'asd';

    handleLogin = (evento) => {
        //console.log('1')
        evento.preventDefault();

        const referenciasForm = this.refs;

        const login = referenciasForm.login.value;
        const senha = referenciasForm.senha.value;

        const url = "http://twitelum-api.herokuapp.com/login";
        // console.log(url) artdiniz 123456
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({ login, senha })
            }).then(async (resposta) => {

                //if  (!resposta.ok ) throw new Error(); 
                //  return resposta.json()
                // return {
                // //  successo: resposta.ok,
                //  data: await resposta.json()
                //

                //}


                //  }).then( data => {
                //console.log("sadsad  ", data);

                //    localStorage.setItem('token', data.token);

                //    this.props.history.push('/')

                // }).catch(err=> console.log(err)); 
                const data = await resposta.json()

                if (resposta.ok) {
                    localStorage.setItem('token', data.token);
                    this.context.setMensagem('Login efetuado com sucesso! Bem vindo!');
                    this.props.history.push('/');
                }
                else {
                    //this.props.LoginFailed = true; 
                    this.setState({ erroMessage: data.message })
                    //this.LoginFailedMsg = data.message;

                    //console.log(data);

                }
            }).catch(err => console.log(err));
    }


    render() {
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form className="loginPage__form" action="/" onSubmit={this.handleLogin} >
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label>
                                    <input ref="login" className="loginPage__input" type="text" id="login" name="login" />
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label>
                                    <input ref="senha" className="loginPage__input" type="password" id="senha" name="senha" />
                                </div>
                                {/* {this.erroMessage &&(<div className="loginPage__errorBox" ref="loginMsg" >
                                    {this.erroMessage}

                                </div>)}    */}
                                <If cond={this.state.erroMessage}>

                                    <div className="loginPage__errorBox">
                                        {this.state.erroMessage}
                                    </div>
                                </If>

                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment >
        )
    }
}


export default LoginPage