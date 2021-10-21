import { useState } from 'react';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap'

function BootstrapModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialUser = {
    firstname: '',
    lastname: '',
    email: ''
  }

  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [modalUser, setModalUser] = useState(initialUser);

  const updateUser = (key, value) => {
    const newUser = { ...modalUser }
    newUser[key] = value
    setModalUser(newUser)
  }

  const handleCloseForm = () => {
    setModalUser(initialUser)
    setShowForm(false)
  }

  const handleSaveForm = () => {
    setUser(modalUser)
    setModalUser(initialUser)
    setShowForm(false)
  }

  const handleCleanUser = () => setUser(initialUser)

  const handleShowForm = () => setShowForm(true);

  return <div id="bootstrap-modals">
    <Card>
      <Card.Header>BootstrapModal</Card.Header>
      <Card.Body>
        <Card.Title>Single Modal</Card.Title>
        <Card.Text>
          Check that the text inside the modal is equal to: <strong>Woohoo, you're reading this text in a modal!</strong>
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Go somewhere</Button>
        <Modal id="single-modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
    <br />
    <Card>
      <Card.Header>BootstrapModal</Card.Header>
      <Card.Body>
        <Card.Title>Modal Form</Card.Title>
        Evaluate the following points:
        <ul>
          <li>Opening of the modal.</li>
          <li>Set fields (Name, Lastname and Email).</li>
          <li>Save Changes, Changes must be reflected in the user information section.</li>
          <li>Press the clean info button and verify that the user information is cleared.</li>
        </ul>
        <Button variant="primary" size="sm" onClick={handleShowForm}>Open Form</Button>
        <Modal id="form-modal" show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextFirstName">
                <Form.Label column sm="2">
                  FirstName
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Firstname" value={modalUser.firstname} onChange={e => updateUser('firstname', e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastname">
                <Form.Label column sm="2">
                  Lastname
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Lastname" value={modalUser.lastname} onChange={e => updateUser('lastname', e.target.value)} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="Email" value={modalUser.email} onChange={e => updateUser('email', e.target.value)} />
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseForm}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSaveForm}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <br />
        <br />
        User Info:
        <ul className="user-info">
          <li>firstname: <strong>{user.firstname}</strong></li>
          <li>lastname: <strong>{user.lastname}</strong></li>
          <li>email: <strong>{user.email}</strong></li>
        </ul>
        <Button variant="danger" size="sm" onClick={handleCleanUser}>Clean info</Button>
      </Card.Body>
    </Card>
  </div>;
}

export default BootstrapModal