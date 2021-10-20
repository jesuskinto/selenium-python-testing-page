import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'

function CheckBox() {
  const [checkboxValue, toggleCheckbox] = useState(false);

  const [checkboxesValues, toggleCheckboxes] = useState([false, false, false, false, false]);

  function changeCheckboxes(key) {
    const newCheckBoxes = [...checkboxesValues]
    newCheckBoxes[key] = !checkboxesValues[key]
    toggleCheckboxes(newCheckBoxes)
  }

  function unCheckAll() {
    toggleCheckboxes([false, false, false, false, false])
  }

  function checkAll() {
    toggleCheckboxes([true, true, true, true, true])
  }

  return <div id="checkboxes">
    <h3>This would be a basic example to start with checkboxes using selenium.</h3>
    <p>
      The HTML input "checkbox" is an input element to enter an array of different
      values.
    </p>
    <p>
      Each input type checkbox has value attribute which is used to define the value submitted by the checkbox.
    </p>
    <Card>
      <Card.Header>CheckBox</Card.Header>
      <Card.Body>
        <Card.Title>Single Checkbox</Card.Title>
        <Card.Text>
          Clicking on the checkbox will display a success message.
        </Card.Text>
        <label>
          Checkbox:
          <input type="checkbox" checked={checkboxValue} onChange={() => toggleCheckbox(prevState => !prevState)} />
        </label>
        <div className="message">Message: <span>{checkboxValue ? 'success' : ''}</span></div>
      </Card.Body>
    </Card>
    <br />
    <Card>
      <Card.Header>CheckBox</Card.Header>
      <Card.Body>
        <Card.Title>Checkboxes</Card.Title>
        Check the below points before automating
        <ul>
          <li>Click on 'Check All' to check all checkboxes at once.</li>
          <li>When you check all the checkboxes, button will change to 'Uncheck All'</li>
          <li>When you uncheck at least one checkbox, button will change to 'Check All'</li>
        </ul>
        {checkboxesValues.map((checkbox, key) =>
          <label key={key}>
            Checkbox {key + 1}:
            <input className="checkboxes" type="checkbox" checked={checkbox} onChange={() => changeCheckboxes(key)} />
          </label>
        )}
        <br />
        {checkboxesValues.length === checkboxesValues.reduce((a, b) => a + b) ?
          <Button variant="primary" onClick={unCheckAll}>Uncheck All</Button> :
          <Button variant="primary" onClick={checkAll}>Check All</Button>
        }
      </Card.Body>
    </Card>
  </div>;
}

export default CheckBox