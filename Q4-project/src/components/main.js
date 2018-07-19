import React from 'react';
import { Navbar, Icon, Chip, Button, Input, NavItem, Sidenav } from 'react-materialize';
import axios from 'axios'
import SignupForm from './signupForm'
import SigninForm from './signinForm'
import TermsOfService from './termsOfService'
import HomePageContent from './homePageContent'
import SearchComponent from './searchComponent'
import UploadForm from './uploadForm'
import UploadButton from './uploadButton'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


  class Main extends React.Component {
   constructor(props){
     super(props)
     this.state = {}
   }

   handleSignUp = (history) => {
     history.push('/signupForm')
   }

   handleSignIn = (history) => {
     history.push('/signinForm')
   }

   handleUpload = (history) => {
     history.push('/uploadForm')
   }

   handleUploadButton = (history) => {
     history.push('/uploadButton')
   }

   handleKeyPress = (e, history) => {
     if (e.key === 'Enter') {
        history.push('/search/'+ e.target.value);
     }
   }

  render() {
    return (
      <div>

      <Navbar id='navbar' brand='Firefly' href='/' right>

        <div className='btnGroup2'>
           <NavItem className="newPost"><Button onClick={() => this.handleUploadButton(this.props.history)} waves='light'>New post<Icon className="cloud-upload" left>cloud_upload</Icon></Button>
          </NavItem>
        </div>

          <div className='btnGroup'>
            <Icon className="search-icon">search</Icon><Input name="search" type="text" label="search" onKeyPress={(e)=> this.handleKeyPress(e, this.props.history)} className="chip" href='get-started.html' ></Input>
            <Button className="chip" onClick={() => this.handleSignIn(this.props.history)}>sign in</Button>
            <Button className="chip" onClick={() => this.handleSignUp(this.props.history)}>sign up</Button>
          </div>

      </Navbar>

    <Switch>
      <Route exact path='/' component={HomePageContent} searchState={this.state}/>
      <Route exact path='/search/:query' component={SearchComponent} />
      <Route exact path='/signinForm' component={SigninForm}/>
      <Route exact path='/signupForm' component={SignupForm}/>
      <Route exact path='/termsOfService' component={TermsOfService}/>
      <Route exact path='/uploadForm/:id' component={UploadForm}/>
      <Route exact path='/uploadButton' component={UploadButton}/>
    </Switch>
    </div>

        )
    }
}

export default Main
