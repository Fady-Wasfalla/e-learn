import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DisplayLesson from './pages/student/displayLesson'
import SignIn from './pages/student/signIn'
import CreateUser from './pages/admin/createUser'
import SignUp from './pages/student/signUp'
import AdminHomePage from './pages/admin/adminHomePage'
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Switch>
        <Route exact path='/signIn' component={SignIn}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/chapter' component={DisplayLesson}/>

        <Route exact path='/adminHomePage' component={AdminHomePage}/>
        <Route exact path='/createUser' component={CreateUser}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
