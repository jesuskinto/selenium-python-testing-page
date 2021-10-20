import { Card } from 'react-bootstrap'

function DataDownload() {
  return <div>
    <Card>
      <Card.Header>Data Download</Card.Header>
      <Card.Body>
        <Card.Title>Data Download</Card.Title>
        <ul>
          <li>Click on the image and validate that an image called <strong>react-logo</strong> is downloaded</li>
        </ul>
        <a href="./logo512.png" download="react-logo">
          <img src="./logo512.png" alt="logo" />
        </a>
      </Card.Body>
    </Card>
  </div>;
}

export default DataDownload