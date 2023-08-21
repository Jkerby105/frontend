import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmDelete2(props) {
  const handleClose = () => {
    props.reverse({ onActive: false, holdID: -1 });
  };

  const handleVolunteerPop = (id, editLocation) => {
    props.reverse({ onActive: true, holdId: id, location: editLocation });
  };

  return (
    <>
      <Modal show={props.value} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: "25px" }}>
          {" "}
          Edit Volunteer{" "}
          <Button
            style={{ marginLeft: "9rem" }}
            variant="primary"
            onClick={(event) => {
              handleVolunteerPop(props.value2.vol, "Volunteer");
            }}
          >
            Select
          </Button>
        </Modal.Body>
        <hr />
        <Modal.Body style={{ fontSize: "25px" }}>
          {" "}
          Edit Contact{" "}
          <Button
            style={{ marginLeft: "11rem" }}
            variant="primary"
            onClick={(event) => {
              handleVolunteerPop(props.value2.emerg, "Contact");
            }}
          >
            Select
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmDelete2;
