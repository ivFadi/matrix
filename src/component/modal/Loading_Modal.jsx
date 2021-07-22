import React, { useEffect } from 'react';
import Modal from 'react-modal';

import './loading_modal.css'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        background              :'transparent',
        padding                 :'0px',
        border                  :'0px',
    }
};

const LoadingModal = (props) => {
    const {isLoading} = props;
    const [modalIsOpen,setIsOpen] = React.useState(true);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={isLoading}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img
                    className="loading"
                    style={{visibility: 'visible !important'}}
                    src='Iphone-spinner-2.gif'
                    alt='loading'/>
            </Modal>
        </div>
    );
}

export default LoadingModal;