// @flow
import React from "react";
import modal from "../styles/modal.module.css";

type Props = {
  content: Object,
  onClose: Function,
};
const Modal = ({ content, onClose }: Props) => {
  return (
    <div className={modal.modal}>
      <div className={modal.modalContent} data-test="modal-content">
        {content}
        <input
          className={modal.button}
          type="button"
          value="CLOSE"
          onClick={onClose}
          data-test="close-button"
        />
      </div>
    </div>
  );
};
export default Modal;
