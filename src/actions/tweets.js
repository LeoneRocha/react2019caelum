// import * as TweetsService from '../services/tweets';


// export function listaTweets () {
//   const token = localStorage.getItem('token');

//   return dispatch => TweetsService
//     .listaTweets(token)
//     .then((listaDeTweets) => {
//       dispatch({
//         type: 'tweets/atualizaLista',
//         listaDeTweets
//       });
//     });
// }



// export function novoTweet ( novoTweet = '') {
//     const token = localStorage.getItem('token');//todo: mover para service o token
  

//       // const token = localStorage.getItem('token');

//     // TweetsService.criaTweet({
//     //   token,
//     //   conteudo: this.state.novoTweet
//     // }).then((tweetCriado) => {
//     //   // atualizar state com objeto de tweet
//     //   // adaptação da renderização de tweets

//     //   this.setState({ novoTweet: '' });
//     //   this.props.dispatch({
//     //     type: 'tweets/novoTweet',
//     //     tweetCriado
//     //   });
//     // }).catch(console.log);
 
//     return dispatch => TweetsService
//       .criaTweet({
//         token,
//         conteudo: novoTweet
//       })
//       .then((tweetCriado) => {
//         dispatch({
//           type: 'tweets/novoTweet',
//           tweetCriado
//         });
//       });
//   }




// export function apagaTweet (id) {
//     const token = localStorage.getItem('token');//todo: mover para service o token
  
 
//     // TweetsService.deleteTweet({ token, tweetId: id })
//     //   .then(() => onDelete(id));


//     return dispatch => TweetsService
//       .deleteTweet({
//         token,
//         tweetId: id
//       })
//       .then(() => {
//         dispatch({
//           type: 'tweets/apagarTweet',
//           tweetId: id
//         });
//       });
//   }
