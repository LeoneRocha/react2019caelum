import React from 'react'
import { Switch , Route } from 'react-router-dom'

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
//GIT LENS import cost quokka
const Trend  = (props)=>{

return (<h1> TELA DO TREND:{props.match.params.trendId}</h1>);

}

 



const Roteamento = () => {

    return (
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>

            <Route path="/trend/:trendId" component={Trend}/>


            <Route path="*" component={NotFound}/>

            </Switch>
    );
}

export default Roteamento;