import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Cabecalho from './../components/Cabecalho'
import NavMenu from './../components/NavMenu'
import Dashboard from './../components/Dashboard'
import Modal from './../components/Modal';
import Widget from './../components/Widget'
import TrendsArea from './../components/TrendsArea'
import Tweet from './../components/Tweet'

// import { NotificacaoContext } from './../contexts/notificacao';
/* import * as TweetsService from '../services/tweets';*/
//import * as TweetsActions from '../actions/tweets';
import {  actions  as TweetsActions} from '../ducks/tweets';




class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleCriaTweet = this.handleCriaTweet.bind(this);
  // }

  state = {
    novoTweet: '',
    listaTweets: [],
    tweetSelecionado: null
  }

  componentDidMount() {
    this.props.dispatch(TweetsActions.listaTweets());
  }

  // componentDidUpdate() {}

  // componentDidMount() {
  //   window.addEventListener('resize', this.handleResize);
  //   // conexão com socket
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleResize);
  //   // desconectar socket
  // }

  handleCriaTweet = (evento) => {
  // handleCriaTweet(evento) {
    evento.preventDefault();

    this.props.dispatch(TweetsActions.novoTweet(this.state.novoTweet))
    .then(()=> this.setState({ novoTweet: '' }) );
 
    // const token = localStorage.getItem('token');

    // TweetsService.criaTweet({
    //   token,
    //   conteudo: this.state.novoTweet
    // }).then((tweetCriado) => {
    //   // atualizar state com objeto de tweet
    //   // adaptação da renderização de tweets

    //   this.setState({ novoTweet: '' });
    //   this.props.dispatch({
    //     type: 'tweets/novoTweet',
    //     tweetCriado
    //   });
    // }).catch(console.log);
  }

  handleCloseModal = () => {
    // this.setState({
    //   tweetSelecionado: null
    // })

    this.props.dispatch(TweetsActions.limpaSelecao());


  }

  onSelectTweet = (tweetId) => {
    // const tweetSelecionado = this.state.listaTweets
    //   .find(tweet => tweet._id === tweetId);

    // this.setState({
    //   tweetSelecionado
    // });

    this.props.dispatch(TweetsActions.selectTweet(tweetId));

  }

  onDeleteTweet = (tweetId) => {
    //const { listaTweets } = this.state;

    // this.setState({
    //   listaTweets: listaTweets
    //     .filter((tweet) => tweet._id !== tweetId)
    // });

    this.props.dispatch(TweetsActions.apagaTweet(tweetId));
     

  // TweetsService.deleteTweet({ token, tweetId: id })
  //     .then(() => onDelete(id));

  }

  novoTweetEstaValido() {
    const novoTweetLength = this.state.novoTweet.length;

    return novoTweetLength > 0 && novoTweetLength <= 140;
  }

  // novoTweetEstaValido(novoTweet) {
  //   const novoTweetLength = novoTweet.length;

  //   return novoTweetLength > 0 && novoTweetLength <= 140;
  // }

  render() {
    // destructuring
    const { novoTweet/*, tweetSelecionado*/ } = this.state;
    // const [primeiroTweet, segundoTweet] = listaTweets;

    const { listaDaStore, tweetSelecionado } = this.props;
    console.log(listaDaStore);

    // const novoTweet = this.state.novoTweet;
    // const listaTweets = this.state.listaTweets;

    return (
      <Fragment>
        <Cabecalho>
          <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.handleCriaTweet}>
                <div className="novoTweet__editorArea">
                  <span className={`novoTweet__status ${this.novoTweetEstaValido() ? '' : 'novoTweet__status--invalido'}`} >
                    {novoTweet.length}/140
                  </span>
                  <textarea
                    className="novoTweet__editor"
                    placeholder="O que está acontecendo?"
                    onChange={(evento) => {
                      // console.log(evento.target.value);
                      this.setState({
                        novoTweet: evento.target.value,
                        // isValid: novoTweetEstaValido(evento.target.value)
                      });
                    }}
                    value={novoTweet}
                  />
                </div>
                <button
                  type="submit"
                  className="novoTweet__envia"
                  disabled={!this.novoTweetEstaValido()}
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {/* truthy */}
                {!listaDaStore.length && (
                  <p>Twite alguma coisa! Vamos arranjar treta!</p>
                )}
                {/* adaptação da renderização de tweets */}
                {listaDaStore.map(tweet => (
                  <Tweet
                    key={tweet._id}
                    id={tweet._id}
                    nomeUsuario={`${tweet.usuario.nome} ${tweet.usuario.sobrenome}`}
                    userName={tweet.usuario.login}
                    totalLikes={tweet.totalLikes}
                    removivel={tweet.removivel}
                    likeado={tweet.likeado}
                    avatarUrl={tweet.usuario.foto}
                    onDelete={this.onDeleteTweet}
                    onSelect={this.onSelectTweet}
                  >
                    {tweet.conteudo}
                  </Tweet>
                ))}
              </div>
            </Widget>
          </Dashboard>
        </div>
        <Modal
          isOpen={Boolean(tweetSelecionado)}
          onClose={this.handleCloseModal}
        >
          {tweetSelecionado && (
            <Tweet
              id={tweetSelecionado._id}
              nomeUsuario={`${tweetSelecionado.usuario.nome} ${tweetSelecionado.usuario.sobrenome}`}
              userName={tweetSelecionado.usuario.login}
              totalLikes={tweetSelecionado.totalLikes}
              removivel={tweetSelecionado.removivel}
              likeado={tweetSelecionado.likeado}
              avatarUrl={tweetSelecionado.usuario.foto}
              onDelete={this.onDeleteTweet}
            >
              {tweetSelecionado.conteudo}
            </Tweet>
          )}
        </Modal>
      </Fragment>
    );
  }
}

function mapStateToProps (stateDaStore) {
  return {
    // nomeDaProp: stateDaStore
    listaDaStore: stateDaStore.lista
    ,tweetSelecionado : stateDaStore.lista.find(tweet => tweet._id === stateDaStore.tweetSelecionado)
  };
}

// const HomeConectadaComStore = connect(mapStateToProps)(Home);
// export default HomeConectadaComStore;

export default connect(mapStateToProps)(Home);
