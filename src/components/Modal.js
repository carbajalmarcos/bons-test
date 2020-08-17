// @flow
import React from "react";
import modal from "../styles/modal.module.css";

type Props = {
  content:Object, 
  onClose: Function,
};
const Modal = ({ content, onClose }: Props) => {
  return (
    <div className={modal.modal}>
      <div className={modal.modalContent}>
        {content}
        <input
          className={modal.button}
          type="button"
          value="CLOSE"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
export default Modal;
