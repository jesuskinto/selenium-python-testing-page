import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'

function SimpleForm() {
  const [message, setMessage] = useState('');
  const [showMessage, toggleShowMessage] = useState(false);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [showValue, toggleShowValue] = useState(false);

  function getTotal() { return parseFloat(num1) + parseFloat(num2) }

  return <div id="simple-form">
    <Card>
      <Card.Header>Simple Form</Card.Header>
      <Card.Body>
        <Card.Title>Input Message</Card.Title>
        <ul>
          <li>First Let us try be very simple with only one input field and a Button</li>
          <li>Enter your message</li>
          <li>Click on 'Show Message' button to display message entered in input field</li>
        </ul>
        {' '}
        <input value={message} onChange={e => { toggleShowMessage(false); setMessage(e.target.value) }} />
        <br />
        <br />
        <Button variant="primary" onClick={() => toggleShowMessage(true)} >Show Message</Button>
        <br />
        <br />
        <div className="message">Message: <span>{showMessage ? message : ''}</span></div>
      </Card.Body>
    </Card>
    <br />
    <Card>
      <Card.Header>Simple Form</Card.Header>
      <Card.Body>
        <Card.Title>Sum of inputs</Card.Title>
        <ul>
          <li>First Let us try with Two input fields and a Button</li>
          <li>Enter Value for a</li>
          <li>Enter Value for b</li>
          <li>Click on 'Get Total' button to display the sum of two numbers 'a and b'</li>
        </ul>
        <label>Num 1: <input type="number" value={num1} onChange={e => { toggleShowValue(false); setNum1(e.target.value) }} /></label>
        <br />
        <label>Num 2: <input type="number" value={num2} onChange={e => { toggleShowValue(false); setNum2(e.target.value) }} /></label>
        <br />
        <br />
        <Button variant="primary" onClick={() => toggleShowValue(true)} >Get Total</Button>
        <br />
        <br />
        <div className="value">Total value: <span>{showValue ? getTotal() : ''}</span></div>
      </Card.Body>
    </Card>
  </div>;
}

export default SimpleForm