import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <Route path='/' component={Main}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


//NPM RUN WATCH_BUILD to look at frontend changes
//NPM RUN START for server start



// class App extends Component {
//   render() {
//     return (
//
//       <div className="App">
//         <CustomNav />
//         <SignupForm />
//         <SigninForm />
//         <Pics /> This will be what get routed to when navigating to /pics/:id
//         This route/component will contain an img tag whose src is the key that was sent as the response after the upload.
//       </div>
//     );
//   }
// }
