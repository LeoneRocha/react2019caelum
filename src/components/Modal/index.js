import React, { Component } from 'react'
import './modal.css'
import Widget from '../Widget';


class Modal extends Component {
 

    handleCloseModal = (event) => {
      const  onClose =  this.props.onClose;
        const clicouNoConteudo = event.target.closest('.modal__conteudo');

        console.log('onClose')
        if (!clicouNoConteudo) {
            onClose();

            //this.setState({ isOpen: false });
        }
    } 
    render() {

        const { isOpen, onClose, children } = this.props;

        return (
            <div className={`modal ${isOpen ? 'modal--active' : ''} `} onClick={this.handleCloseModal} >
                <div className="modal__conteudo" >
                    <Widget>
                        <h1>
                            {isOpen && children}
                        </h1>

                    </Widget>
                </div>

            </div >
        )
    }

}

export default Modal;