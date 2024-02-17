import React from 'react';
import "../Components/ModalColaborador.css";

export default function ModalColaborador ({isOpen, setModalOpen, children}) {

    if (isOpen){
        return (
            <div className="backgroundStyle">
                <div className="ModalStyle">
                    <button className="modalclose btn btn-danger m-1" onClick={setModalOpen}>X</button>
                    {children}
                </div>
            </div>
        )
    }

    return null
}
