import { Card, Button } from 'react-bootstrap'

function JavascriptAlert() {
  const openSimpleAlert = () => alert("I am an alert box!");

  return <div id="javascript-alert">
    <Card>
      <Card.Header>JavascriptAlert</Card.Header>
      <Card.Body>
        <Card.Title>Simple Alert</Card.Title>
        <Card.Text>
          Open the alert and verify the message matches <strong>I am an alert box!</strong>
        </Card.Text>
        <Button variant="primary" onClick={openSimpleAlert} >Click</Button>
      </Card.Body>
    </Card>
  </div>;
}

export default JavascriptAlert