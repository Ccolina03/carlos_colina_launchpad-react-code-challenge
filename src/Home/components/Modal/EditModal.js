import React from "react";
import Modal from "react-modal";
import EditPost from "./EditPost";

const ModalComponent = ({ isOpen, onRequestClose, editData, handleSubmit, ...rest }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <EditPost initialValues={editData} onSubmit={handleSubmit} {...rest} />
    </Modal>
  );
};

export default ModalComponent;