import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import displayLesson from './pages/student/displayLesson'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Switch>
        <Route exact path='/display-lesson' component={displayLesson}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
