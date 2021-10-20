import { Link } from "react-router-dom";

function Home() {
  return <div>
    <h1>Welcome to QA test!</h1>
    <h2>List of sections:</h2>
    <ul>
      <li><Link to="/simple-form">Simple-form</Link></li>
      <li><Link to="/checkbox">Checkbox</Link></li>
      <li><Link to="/javascript-alert">Javascript-alert</Link></li>
      <li><Link to="/bootstrap-modal">Bootstrap-modal</Link></li>
      <li><Link to="/jquery-date">Jquery-date</Link></li>
      {/* <li><Link to="/table-sort-and-search">table-sort-and-search</Link></li> */}
      <li><Link to="/data-download">Data-download</Link></li>
      <li><Link to="/data-loading">Data-loading</Link></li>
      {/* <li><Link to="/data-drag-and-drop">data-drag-and-drop</Link></li> */}
    </ul>
  </div>;
}

export default Home