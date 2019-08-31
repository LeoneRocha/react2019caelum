import React, { Component, Fragment } from 'react';

import Cabecalho from './../components/Cabecalho'
import NavMenu from './../components/NavMenu'
import Dashboard from './../components/Dashboard'
import Widget from './../components/Widget'
import TrendsArea from './../components/TrendsArea'
import Tweet from './../components/Tweet'
import Modal from './../components/Modal'

import * as Twiteservice from '../Services/twiteservice';
// import { NotificacaoContext } from './../contexts/notificacao';

class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleCriaTweet = this.handleCriaTweet.bind(this);
  // }

  state = {
    novoTweet: '',
    tweetSelecionado :null,
    listaTweets: []
  }

  onDeleteTwwet = (tweetId) => {
    // const token = localStorage.getItem('token');
    //const tweetId = this.props.id;

    const { listaTweets } = this.state;


    this.setState({ listaTweets: listaTweets.filter((tweet) => tweet._id !== tweetId) })


  }


  componentDidMount() {
    const token = localStorage.getItem('token');

    Twiteservice.listaTweet({ token })
      .then((listTweet) => {
        this.setState({
          listaTweets: listTweet
        });
      })
  }

  handleCloseModal = (evento) => {

    this.setState({tweetSelecionado : null});
  }

onSelectTweet = (tweetId) => {
 const selecionado = this.state.listaTweets.find(tweet=> tweet._id === tweetId);
 this.setState({tweetSelecionado : selecionado});
   }

  handleCriaTweet = (evento) => {
    // handleCriaTweet(evento) {
    evento.preventDefault();

    const token = localStorage.getItem('token');

    // fetch -> comunicação com API

    Twiteservice.criaTweet({ token, conteudo: this.state.novoTweet }
    ).then((tweetCriado) => { this.setState({ novoTweet: '', listaTweets: [tweetCriado, ...this.state.listaTweets] }) });

    // atualizar state com objeto de tweet
    // adaptação da renderização de tweets
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
    const { novoTweet, listaTweets,tweetSelecionado } = this.state;
    // const [primeiroTweet, segundoTweet] = listaTweets;

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
                {!listaTweets.length && (
                  <p>Twite alguma coisa! Vamos arranjar treta!</p>
                )}
                {/* adaptação da renderização de tweets */}
                {listaTweets.map((tweet, index) => (
                  <Tweet
                    key={tweet._id}
                    id={tweet._id}
                    likeado={tweet.likeado}
                    nomeUsuario={`${tweet.usuario.nome} ${tweet.usuario.sobrenome}`}
                    userName={tweet.usuario.login}
                    totalLikes={tweet.totalLikes}
                    avatarUrl={tweet.usuario.foto}
                    removivel={tweet.removivel}
                    onDelete={this.onDeleteTwwet}
                    onSelect={this.onSelectTweet}
                  >
                    {tweet.conteudo}
                  </Tweet>
                ))}
              </div>
            </Widget>
          </Dashboard>
        </div> 
        <Modal isOpen={Boolean(tweetSelecionado)} onClose={this.handleCloseModal}>
        {Boolean(tweetSelecionado) &&  (<Tweet
                    key={tweetSelecionado._id}
                    id={tweetSelecionado._id}
                    likeado={tweetSelecionado.likeado}
                    nomeUsuario={`${tweetSelecionado.usuario.nome} ${tweetSelecionado.usuario.sobrenome}`}
                    userName={tweetSelecionado.usuario.login}
                    totalLikes={tweetSelecionado.totalLikes}
                    avatarUrl={tweetSelecionado.usuario.foto}
                    removivel={tweetSelecionado.removivel}
                    
                    
                  >
                    {tweetSelecionado.conteudo}
                  </Tweet>)}
        </Modal>
 
      </Fragment>
    );
  }
}

export default Home;
