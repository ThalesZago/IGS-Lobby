import React, { useEffect } from 'react';
import './help.css';
const Help = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div
      className={`modal ${props.show ? 'show' : ''}`}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title"> Help</h4>
          <img
            className="close-help"
            onClick={props.onClose}
            alt=""
            src={require('./image/btn_exit_help_on.png')}
          />
        </div>
        <div className="modal-body">
          {' '}
          <h1>Need help my little friend?</h1>
          <p>This page was developed to show the IGS games catalog.</p>
          <p>Enjoy! :)</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
