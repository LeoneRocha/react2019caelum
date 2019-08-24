import React from 'react'
import { Switch , Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'


import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Logout from "./pages/LoginPage/logout";
//GIT LENS import cost quokka
const Trend  = (props)=>{ 
return (<h1> TELA DO TREND:{props.match.params.trendId}</h1>);

}

 
const RotaAutenticada  = ({deveEstarAutenticado,  redirectTo, ...props})=>{ 
     const token =  localStorage.getItem('token')

     console.log(deveEstarAutenticado)
    if ((token && deveEstarAutenticado)|| (!token && !deveEstarAutenticado)) {

     return   <Route {...props}/>

    }

    return <Redirect to={redirectTo}/>

}


const Roteamento = () => {

    return (
            <Switch>
            <RotaAutenticada path="/" component={Home} deveEstarAutenticado={true} exact redirectTo="./login"/>
            <RotaAutenticada path="/login" component={Login} deveEstarAutenticado={false}/>

            <Route path="/trend/:trendId" component={Trend} />

            <Route path="/logout" component={Logout}  />

            <Route path="*" component={NotFound} />

            </Switch>
    );
}

export default Roteamento;