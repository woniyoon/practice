import React from 'react';
import './Modal.css';

function Modal({ close, project }){

    console.log(close);
    return (
        <div className="modalContainer">
            <div className="modalOverlay">
            </div>
            <main className="modalContent">
                <p onClick={close}>X</p>
                <div className="modal">Modal!!!</div>
            </main>
        </div>
    );
}

export default Modal;