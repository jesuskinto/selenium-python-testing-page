import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JavascriptAlert from './components/JavascriptAlert'
import JqueryDate from './components/JqueryDate'
import CheckBox from './components/CheckBox'
import BootstrapModal from './components/BootstrapModal'
import DataLoading from './components/DataLoading'
import SimpleForm from './components/SimpleForm'
import Home from './components/Home'


import {
  Card, Button
} from 'react-bootstrap'

import {
  HashRouter as Router,
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
            <Route path="/data-loading">
              <DataLoading />
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




