import React, { useState } from 'react';
import closeicon from './assets/closeicon.svg';
import facebooklogin_page from './assets/facebooklogin.svg';
import googlelogin_page from './assets/googlelogin.svg';
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
            <form action="">
            <input type="text"
             placeholder="Username"/>
            <input type="password"
             placeholder="Password"/>

             <a className='forgotpass_login_box' href="">Forgot Password?</a>
            <button className="loginbutton">Login</button>

            <button className='facebook_login_button'><img src={facebooklogin_page} alt="" /></button>
            <button className='facebook_login_button'><img src={googlelogin_page} alt="" /></button>
            <h7>Don't have an account? <a href="">Register</a></h7>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;