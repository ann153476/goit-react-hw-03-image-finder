import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './modal-styles.module.css';
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleoverlayclick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.handleoverlayclick}>
        <div className={s.modal}>
          {children}
          <span onClick={this.props.onClose} className={s.close}>
            x
          </span>
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
