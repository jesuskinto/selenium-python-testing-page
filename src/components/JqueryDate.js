import { useState } from "react";
import { Card } from 'react-bootstrap'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';


function JqueryDate() {
  const [value, onChange] = useState([new Date(), new Date()]);
  return <div>
    <Card>
      <Card.Header>Js DateRangePicker</Card.Header>
      <Card.Body>
        <Card.Title>Js DateRangePicker</Card.Title>
        <ul>
          <li>Change the data of the DateRangePicker and validate that the <strong>Current date</strong> is updated correctly.</li>
          <li>Press the x of the DateRangePicker and validate that the <strong>Current date</strong> fields are cleared.</li>
        </ul>
        <DateRangePicker
          locale={'en'}
          onChange={onChange}
          value={value}
        />
        <br />
        <br />
        Current date:
        <ul className="current-date">
          <li>From: <strong>{value ? value[0].toDateString() : ''}</strong></li>
          <li>To:   <strong>{value ? value[1].toDateString() : ''}</strong></li>
        </ul>
      </Card.Body>
    </Card>
  </div>;
}

export default JqueryDate