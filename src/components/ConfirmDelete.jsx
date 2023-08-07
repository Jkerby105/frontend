import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 

function ConfirmDelete(props) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     setShow(false)
//   };
  
// //   const handleShow = () => {
// //     setShow(true)
// //   };

//   if(props.value === true){
//     setShow(true)
//   }
    
    const handleClose = () => {
        props.reverse();
    }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {}

      <Modal show={props.value}>
        <Modal.Header closeButton>
          <Modal.Title>Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm Delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to='' variant="primary" >
            Delete
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmDelete;