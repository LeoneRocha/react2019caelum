 ///import './loginPage.css'
 import config from '../config'

export function criaTweet({ token, conteudo }) {

    return fetch(`${config.apiRoot}/tweets?X-AUTH-TOKEN=${token}`, {
        method: 'POST',
        body: JSON.stringify({
            conteudo: conteudo
        })
    }).then( (response) => {         return   response.json();

        //if (response.ok) {
        // notificacao
        // this.setState({
        //  novoTweet: '',
        //   listaTweets: [tweetCriado, ...this.state.listaTweets]
        //  });
        //} 
        //return { tweetCriado, respostaOK: resposta.ok }; 
    }).catch(console.log); 
}; 

export function apagaTweet({ token,   tweetId  }) {

    return fetch(`${config.apiRoot}/tweets/${tweetId}?X-AUTH-TOKEN=${token}`, {
        method: 'DELETE' 
    }).then( (response) => { return   response.json(); 

        //if (response.ok) {
        // notificacao
        // this.setState({
        //  novoTweet: '',
        //   listaTweets: [tweetCriado, ...this.state.listaTweets]
        //  });
        //} 
        //return { tweetCriado, respostaOK: resposta.ok }; 
    }).then( (data) =>  {console.log(data) ; return data;})
    
    .catch(console.log);

}; 
 
export function listaTweet({ token  }) { 
    return fetch(`${config.apiRoot}/tweets?X-AUTH-TOKEN=${token}` )
     .then( (response) => {         return   response.json(); 
        //if (response.ok) {
        // notificacao
        // this.setState({
        //  novoTweet: '',
        //   listaTweets: [tweetCriado, ...this.state.listaTweets]
        //  });
        //} 
        //return { tweetCriado, respostaOK: resposta.ok }; 
    }).then( (data) =>  {console.log(data) ; return data;})
    
    .catch(console.log);

}; 

export function likeTweet({ token, tweetId  }) {
 
    return fetch(`${config.apiRoot}/tweets/${tweetId}/like?X-AUTH-TOKEN=${token}` , {
        method: 'POST' 
    }).then( (response) => { return   response.json(); 

        //if (response.ok) {
        // notificacao
        // this.setState({
        //  novoTweet: '',
        //   listaTweets: [tweetCriado, ...this.state.listaTweets]
        //  });
        //} 
        //return { tweetCriado, respostaOK: resposta.ok }; 
    }).then( (data) =>  {console.log(data) ; return data;})
    
    .catch(console.log);

}; 
