import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {

    state = {
        novoTweet: '',
        listaTweets: []
    }

    novoTweetIsValid() {
        const novoTweetLenght = this.state.novoTweet.length;

        return novoTweetLenght <= 140 && novoTweetLenght > 0

    }
    handleCriarTweet = (evento) => {

        evento.preventDefault();


        this.setState({
            novoTweet: '',
            listaTweets: [this.state.novoTweet, ...this.state.listaTweets]
        }, () => console.log(this.state.listaTweets)); 
    } 
    render() {

        //destructiong js6
     const {novoTweet , listaTweets} = this.state;//this.state.novoTweet 
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario="@omariosouto" />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.handleCriarTweet}>
                                <div className="novoTweet__editorArea">
                                    <span className={`novoTweet__status ${!this.novoTweetIsValid() ? 'novoTweet__status--invalido' : ''}`}>{this.state.novoTweet.length}/140</span>
                                    <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={(evento) => {
                                        //console.log(evento.target.value)

                                        this.setState({ novoTweet: evento.target.value })
                                    }} value={novoTweet}></textarea>
                                </div>
                                <button type="submit" className="novoTweet__envia" disabled={!this.novoTweetIsValid()}>Tweetar</button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {//listaTweets.length === 0 ? "Feed Vazio. Poste algo": ""

                                //truthy
                                }
                                  { listaTweets.length === 0 && (<p> Poste Algo</p>)}
                                { listaTweets.map((item, index) => (
                                    <Tweet NomeUsuario="Leone" FotoUsuario="https://placehold.it/50x50" userName="leo" likes={100} key={index}>

                                        <span>
                                            {//}  Lorem, ipsum dolor sit <a href="/trends/#amet" data-reactroot="">#amet</a> consectetur adipisicing <a href="/trends/#elit" data-reactroot="">#elit</a>. Adipisci ut cumque tempora? Quam velit vitae voluptatum tempora iste, mollitia, sa
                                            }
                                            {item}

                                        </span>

                                    </Tweet>

                                ))}
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default App;
