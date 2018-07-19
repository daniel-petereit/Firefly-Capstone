
import React from 'react';
import { Input } from 'react-materialize';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus';
import FaAmazon from 'react-icons/lib/fa/amazon';
import axios from 'axios'
let baseURL = "http://localhost:8080";



class SignupForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRedirect = (history) => {
    history.push('/signinForm')
  }

  handleTerms = (history) => {
    history.push('termsOfService')
  }

  register = (e) => {
    e.preventDefault();

    let {username, email, password, confirm} = this.state

    if(!username || !email || !password || !confirm){
      console.log('please fill in all fields');
    } else if(password !== confirm){
      console.log('please type password correctly in both fields');
    } else {
      let body = {username, email, password}
        return axios.post(`${baseURL}/users/signup`, body)
          .then((response) => {
            console.log(response);
          })
          .catch(console.error)
    }

    console.log('clicked');
    console.log(this.state);
  }



    render() {
      return (

      <div id="signup-container">

        <div className="signin-callout text-center text-shadow">Register with</div>

        <div className="signin-social core-dark core-shadow br5">
          <a className="facebook-icon signin lvl1-dark br5 mr10 inline left" tabIndex="1" href=""><FaFacebook /></a>
          <a className="twitter-icon signin lvl1-dark br5 mr10 inline left" tabIndex="2" href=""><FaTwitter /></a>
          <a className="google-icon signin lvl1-dark br5 mr10 inline left" tabIndex="3" href=""><TiSocialGooglePlus /></a>
          <a className="amazon-icon signin lvl1-dark br5 mr10 inline left" tabIndex="4" href=""><FaAmazon /></a>
        </div>

        <div className="signin-callout text-center text-shadow"><span className="fade-break"></span>or with Imgur<span className="fade-break-flip"></span></div>


        <form id="register" method="post" onSubmit={this.register} >
          <div id="register-form core-dark core-shadow br5">

              <Input name='username' value={this.state.username} id="username" className="br5 lvl1-dark" type="text" tabIndex="5" maxLength="255" label="Username"   onChange={(e)=> this.handleChange(e)}/>

              <Input name='email' id="email" className="br5 lvl1-dark" type="email" tabIndex="6" maxLength="255" label="Email" value={this.state.email} onChange={(e)=> this.handleChange(e)}/>

              <Input name='password' id="password" type="password" className="br5 lvl1-dark" tabIndex="7" label="Password" value={this.state.password} onChange={(e)=> this.handleChange(e)}/>

              <Input name='confirm' id="confirm_password" type="password" className="br5 lvl1-dark" tabIndex="8" label="Confirm Password" onChange={(e)=> this.handleChange(e)}/>

              <p className="terms-of-service">By registering you agree to our<a href="" onClick={() => this.handleTerms(this.props.history)} className="terms" > terms of service </a></p>

              <div className='signup-button'>
                <button className="btn btn-action right" name="submit" tabIndex="8" type="submit">Next</button>
                <div className="signin-register">
                  <a id="signin-register-link" href="" onClick={() => this.handleRedirect(this.props.history)}>sign in</a>
                </div>
                  <div className="signin-register"></div>
              </div>

          </div>

        </form>
    </div>
      )
    }
  }

export default SignupForm




  //react form that takes in Username and Password. On submit, post to sign up route.
