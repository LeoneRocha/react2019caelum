import * as TweetsService from '../services/tweets';

const actionTypes = {

    atualizaLista: 'tweets/atualizaLista'
    , novoTweet: 'tweets/novoTweet'
    , apagarTweet: 'tweets/apagarTweet'
    , selectTweet: 'tweets/selectTweet'
    , clearSelect : 'tweets/clearSelect'
    , likeTweet : 'tweets/likeTweet'
};



export const actions = {
    listaTweets() {
        const token = localStorage.getItem('token');

        return dispatch => TweetsService
            .listaTweets(token)
            .then((listaDeTweets) => {
                dispatch({
                    //type: 'tweets/atualizaLista',
                    type: actionTypes.atualizaLista,
                    listaDeTweets
                });
            });
    },
    novoTweet(novoTweet = '') {
        const token = localStorage.getItem('token');

        return dispatch => TweetsService
            .criaTweet({
                token,
                conteudo: novoTweet
            })
            .then((tweetCriado) => {
                dispatch({
                    //type: 'tweets/novoTweet',
                    type: actionTypes.novoTweet,
                    tweetCriado
                });
            });
    },
    apagaTweet(id) {
        const token = localStorage.getItem('token');//todo: mover para service o token


        // TweetsService.deleteTweet({ token, tweetId: id })
        //   .then(() => onDelete(id)); 
        return dispatch => TweetsService
            .deleteTweet({
                token,
                tweetId: id
            })
            .then(() => {
                dispatch({
                    // type: 'tweets/apagarTweet',
                    type: actionTypes.apagarTweet,
                    tweetId: id
                });
            });
    }
    , selectTweet(id) {

        return {
            type: actionTypes.selectTweet,
            tweetId: id
        };
    }, limpaSelecao() {

        return {
            type: actionTypes.clearSelect, 
        };
    }, curtirTweet(id) {
        const token = localStorage.getItem('token');//todo: mover para service o token


        // TweetsService.deleteTweet({ token, tweetId: id })
        //   .then(() => onDelete(id)); 
        return dispatch => TweetsService
            .curtirTweet({
                token,
                tweetId: id
            })
            .then(() => {
                dispatch({
                    // type: 'tweets/apagarTweet',
                    type: actionTypes.likeTweet,
                    tweetId: id
                });
            });
    }
}

export const stateInicial = {
    lista: [],
    tweetSelecionado: ''
};


export const reduceHandler = {
    [actionTypes.atualizaLista]: (store, action) => {
        return {
            ...store,
            lista: action.listaDeTweets
        };
    }
    , [actionTypes.novoTweet]: (store, action) => {
        return {
            ...store,
            lista: [action.tweetCriado, ...store.lista]
        };
    }
    , [actionTypes.apagarTweet]: (store, action) => {
        return {
            ...store,
            lista: store.lista.filter((tweet) => tweet._id !== action.tweetId)
        };
    }
    , [actionTypes.selectTweet]: (store, action) => {
        return {
            ...store,
            tweetSelecionado: action.tweetId
        };
    }, [actionTypes.clearSelect]: (store ) => {
        return {
            ...store, 
            tweetSelecionado : ''
        };
    } , [actionTypes.likeTweet]: (store, action) => {
const twettCurtido  = store.lista.find((tweet) => tweet._id === action.tweetId)


        return {
            ...store 
            
        };
    }
    // , [actionTypes.selectTweet]: (store, action) => {
    //     return {
    //         ...store,
    //         lista: store.lista.find((tweet) => tweet._id === action.tweetId)
    //     };
    // }
};


//   export default {
//       reduceHandler,stateInicial, actions , //actionTypes,
//   }
