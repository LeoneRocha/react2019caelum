import React from 'react'

//DUMB Componente - functions - 
//1
//function NavBar () {
//2 
// export default function NavBar () {
//3 
// export default ()  =>  ( RETURN)
//4
// export default const Navbar = ()  => ()

export default function NavBar(props) {
    return (
        <nav>
            <ul>
                {props.links.map(link => (
                    <li>
                        <a href="#">{link}</a>
                    </li>

                ))}
                {/* <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">Notifications</a>
                    </li>

                    <li>
                        <a href="#">Menssages</a>
                   </li>*/}
            </ul>
        </nav>

    )


}

//export default NavBar;

