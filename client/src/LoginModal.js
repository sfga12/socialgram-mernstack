import React, { useState } from 'react';
import closeicon from './assets/closeicon.svg'

function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <a href="#" onClick={toggleModal}><span>Login</span></a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
      {showModal && (

        <div className="centered-box loginbox">
          <div className="modal-content">
            <span className="centered-box_close" onClick={() => {
              setShowModal(false);
            }}> <img src={closeicon} alt="" /> </span>
            <h1>Log in to Socialgram</h1>
            <p>Bu bir modal penceresidir.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;