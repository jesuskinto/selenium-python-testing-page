import { useState } from 'react';
import { Card, Dropdown, InputGroup, FormControl, Alert } from 'react-bootstrap'
const movies = require('../movies.json')
const DEBOUNCE_TIME = 100

function DataLoading() {
  const [movieName, setMovieName] = useState('');
  const [filteredMovies, filteredMoviesChange] = useState([]);
  const [todo, setTodo] = useState([]);


  const debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


  const add = (value) => {
    if (!value) return
    if (todo.some(item => item === value)) return;
    const _todo = [...todo]
    _todo.push(value)
    setMovieName('')
    setTodo(_todo)
  }


  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const fetchData = (value) => {
    const _value = value.toLowerCase()
    filteredMoviesChange(movies.filter(m => m.title.toLowerCase().search(_value) !== -1))
  }

  const onSearch = value => {
    if (value) {
      const randomTime = getRandomInt(800, 2000)
      filteredMoviesChange([{ title: 'loading' }])
      debounce(setTimeout(() => fetchData(value), randomTime), DEBOUNCE_TIME)
    } else filteredMoviesChange([])
    setMovieName(value)
  }

  const onSelectItem = value => {
    if (value === 'loading') return;
    filteredMoviesChange([])
    add(value)
  }

  return <div id="data-loading">
    <Card>
      <Card.Header>DataLoading</Card.Header>
      <Card.Body>
        <Card.Title>Search and add Movie</Card.Title>
        <ul>
          <li>Search and select movies: <strong>WALL·E, Interstellar and Ratatouille</strong>.</li>
          <li>Validate that the items appear in the list of selected movies.</li>
        </ul>
        <Alert variant="warning">
          If you are using <strong>Selenium</strong>, preferably use <strong>explicit wait</strong> while movies load
        </Alert>

        <InputGroup className="mb-3">
          <FormControl
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            placeholder="Search Movie"
            value={movieName}
            onChange={e => onSearch(e.target.value)}
          />
        </InputGroup>
        {filteredMovies.length ?
          <Dropdown.Menu show>
            {filteredMovies.map((movie, key) =>
              <Dropdown.Item
                key={key}
                eventKey={key}
                onClick={() => onSelectItem(movie.title)}>
                {movie.title}
              </Dropdown.Item>)}
          </Dropdown.Menu> : ''
        }
        <br />
        <h5>List of Movies</h5>
        <ul className="list-of-movie">
          {todo.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </Card.Body>
    </Card>
  </div>;
}

export default DataLoading