import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JavascriptAlert from './components/JavascriptAlert'
import JqueryDate from './components/JqueryDate'
import DataDownload from './components/DataDownload'
import DataDragAndDrop from './components/DataDragAndDrop'
import CheckBox from './components/CheckBox'
import BootstrapModal from './components/BootstrapModal'
import TableSortAndSearch from './components/TableSortAndSearch'
import DataLoading from './components/DataLoading'
import SimpleForm from './components/SimpleForm'
import Home from './components/Home'


import {
  Card, Button
} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Card body>
          <Link to="/"><Button size="sm">Go home</Button></Link>
          <br />
          <br />
          <Switch>
            <Route path="/simple-form">
              <SimpleForm />
            </Route>
            <Route path="/checkbox">
              <CheckBox />
            </Route>
            <Route path="/javascript-alert">
              <JavascriptAlert />
            </Route>
            <Route path="/bootstrap-modal">
              <BootstrapModal />
            </Route>
            <Route path="/jquery-date">
              <JqueryDate />
            </Route>
            <Route path="/table-sort-and-search">
              <TableSortAndSearch />
            </Route>
            <Route path="/data-download">
              <DataDownload />
            </Route>
            <Route path="/data-loading">
              <DataLoading />
            </Route>
            <Route path="/data-drag-and-drop">
              <DataDragAndDrop />
            </Route>
            <Route path="/simple-form">
              <SimpleForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Card>
      </div>
    </Router>
  );
}

export default App;




