import React from 'react';
import './Modal.css';

function Modal({ close, projectId }){

    // useEffect(() => {
    //     document.body.style.cssText = `position: fixed; top: -${window.scrollY}px;`
    //     return () => {
    //         const scrollY = document.body.style.top
    //         document.body.style.cssText = `position: ""; top: "";`
    //         window.scrollTo(0, parseInt(scrollY || '0') * -1)
    //     }
    // }, [])

    console.log(projectId);

    // id
    // period
    // projectThumbnail
    // title

    return (
        <div className="modalContainer">
            <div className="modalOverlay">
            </div>
            <main className="modalContent">
                <p onClick={close}>X</p>
                <div className="modal">Modal!!!</div>
                <p>{projectId}</p>
            </main>
        </div>
    );
}

export default Modal;