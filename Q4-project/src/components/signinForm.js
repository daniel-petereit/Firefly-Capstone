import React from 'react';
import { Input } from 'react-materialize';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import TiSocialGooglePlus from 'react-icons/lib/ti/social-google-plus';
import FaAmazon from 'react-icons/lib/fa/amazon';
import axios from 'axios';

let baseURL = "http://localhost:8080";



class SigninForm extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        userInfo: '',
        password: '',
        // loggedIn: false
      }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  signin = (e) => {
    e.preventDefault();

    let {userInfo, password} = this.state
      console.log(userInfo);
    if(!userInfo || !password){
      alert('Please fill in a username and/or password');
    }

    let body = {userInfo, password}

    return axios.post(`${baseURL}/users/login`, body)
      .then((response) => {
        console.log(response.headers)
        let bearerToken = response.headers.authorization;
        let bigBoyToken = bearerToken.slice(8)
        console.log(bigBoyToken);
        localStorage.setItem('Token', bigBoyToken)
      })
      .catch(console.error)
  }

  logout = (e) => {
    e.preventDefault();

    this.setState({loggedIn: false})


  }

    handleRedirect = (history) => {
      history.push('/signupForm')
    }

    render() {
      return (

      <div id="signin-container">

        <div className="signin-callout text-center text-shadow">Sign In with</div>

        <div className="signin-social core-dark core-shadow br5">
          <a className="facebook-icon signin lvl1-dark br5 mr10 inline left" tabIndex="1" href=""><FaFacebook /></a>
          <a className="twitter-icon signin lvl1-dark br5 mr10 inline left" tabIndex="2" href=""><FaTwitter /></a>
          <a className="google-icon signin lvl1-dark br5 mr10 inline left" tabIndex="3" href=""><TiSocialGooglePlus /></a>
          <a className="amazon-icon signin lvl1-dark br5 mr10 inline left" tabIndex="4" href=""><FaAmazon /></a>
        </div>

        <div className="signin-callout text-center text-shadow"><span className="fade-break"></span>or with Imgur<span className="fade-break-flip"></span></div>

        <form id="signup" method="post" onSubmit={this.signin}>
          <div id="register-form core-dark core-shadow br5">
              <Input name='userInfo' id="username2" className="br5 lvl1-dark" type="text" tabIndex="5" maxLength="255" label="Username"  value={this.state.userInfo} onChange={(e)=> this.handleChange(e)} />
              <Input name="password" id="password2" type="password" className="br5 lvl1-dark" tabIndex="7" label="Password" value={this.state.password} onChange={(e)=> this.handleChange(e)}/>
              <a className="forgot-password text-center"  href="">forgot?</a>
          </div>


        <div className='signin-button'>
          <button className="btn btn-action right" name="submit" tabIndex="8" type="submit">Sign In</button>
            <div className="signin-register">
              <a id="signup-register-link" href="" onClick={() => this.handleRedirect(this.props.history)}>need an account?</a>
            </div>
        </div>

        </form>
    </div>
      )
    }
  }

export default SigninForm
