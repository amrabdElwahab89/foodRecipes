import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Modals({
  handleShow,
  show,
  handleClose,
  modalImg,
  title,
  text,
  needButton,
  btnText,
  btnFunction,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {" "}
          <div>
            <img className="w-25 " src={modalImg} alt="" />
          </div>
          <span className="fw-bold">{title} </span> <br />
          <span>{text}</span>
        </Modal.Body>
        <Modal.Footer>
          {needButton ? (
            <Button
              variant="primary"
              onClick={() => {
                btnFunction();
                handleClose();
              }}
            >
              {btnText}
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
}
