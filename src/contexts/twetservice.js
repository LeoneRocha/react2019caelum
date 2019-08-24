import React, { Component } from 'react'


class TweetService extends Component {

    salvarTweet = (novoTweet) => {

        const token = localStorage.getItem('token')
        const url = 'http://api-twitelum.herokuapp.com/tweets?X-AUTH-TOKEN=${token}'  ;
        // console.log(url) artdiniz 123456
        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({ conteudo: novoTweet })
            }).then(async (resposta) => {

                const data = await resposta.json()

                if (resposta.ok) {
                    this.context.setMensagem('Login efetuado com sucesso! Bem vindo!');

                }
                else {

                }
            }).catch(err => console.log(err));

        return novoTweet;
    }

}


export default TweetService