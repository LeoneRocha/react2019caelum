import React from 'react'
import { Redirect } from 'react-router-dom'

///import './loginPage.css'

const Logout = (props) => {

    console.log('usuario deslogado')
        ;
    console.log(props.match.params)
    localStorage.removeItem('token');
    //   props.history.push('/login');

    //return null

    return <Redirect to="/login" />
};

export default Logout