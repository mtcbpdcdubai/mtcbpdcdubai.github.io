import PropTypes from 'prop-types';
import './Modal.css';

/**
 * Modal component to display content in a modal dialog.
 * @param {Object} props
 * @param {boolean} props.show Determines whether the modal is visible
 * @param {function} props.handleClose Function to handle closing the modal
 * @param {React.ReactNode} props.children The content to be displayed inside
 */
function Modal({ show, handleClose, children }) {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>&times;</button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
