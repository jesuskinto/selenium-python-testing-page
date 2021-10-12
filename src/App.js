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
  Card,
  Button,
  ButtonGroup
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
          <nav>
            <ButtonGroup aria-label="Basic example">
              <Link to="/"><Button variant="secondary">home</Button></Link>
              <Link to="/simple-form"><Button variant="secondary">simple-form</Button></Link>
              <Link to="/checkbox"><Button variant="secondary">checkbox</Button></Link>
              <Link to="/javascript-alert"><Button variant="secondary">javascript-alert</Button></Link>
              <Link to="/bootstrap-modal"><Button variant="secondary">bootstrap-modal</Button></Link>
              <Link to="/jquery-date"><Button variant="secondary">jquery-date</Button></Link>
              <Link to="/table-sort-and-search"><Button variant="secondary">table-sort-and-search</Button></Link>
              <Link to="/data-download"><Button variant="secondary">data-download</Button></Link>
              <Link to="/data-loading"><Button variant="secondary">data-loading</Button></Link>
              <Link to="/data-drag-and-drop"><Button variant="secondary">data-drag-and-drop</Button></Link>
            </ButtonGroup>
          </nav>
          <hr />
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




