import React from 'react';
import Modal from 'react-modal';

import './loading_modal.css'
import RealChart from './RealChart';

const DataModal = (props) => {
    const {isLoading, setModalState, series, isFetching} = props;

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            background              :'#282c34',
            padding                 :'0px',
            border                  :'0px',
        },
        overlay: {
            background: isFetching ? 'none' : 'rgba(255,255,255,0.75)'
        }
    };

    function closeModal(){
        setModalState(isFetching);
    }

    return (
        <div>
            <Modal
                isOpen={isLoading}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div style={{width: "100%", boxSizing: "border-box", padding: "20px"}}>
                    <RealChart series={series}/>
                </div>
            </Modal>
        </div>
    );
}

export default DataModal;