// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',

    isTrue: false,
    showFirstNameError: false,
    showLastNameError: false,
  }

  eventHandlerFirstName = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastname: event.target.value})
  }

  eventHandlerLastName = () => {
    const {lastname} = this.state

    if (lastname === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({showLastNameError: false})
    }
  }

  submitButton = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname && lastname !== '') {
      this.setState({isTrue: true})
    } else {
      this.setState({isTrue: false})
      this.setState({showFirstNameError: true})
      this.setState({showLastNameError: true})
    }
  }

  responseButton = event => {
    event.preventDefault()

    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
      firstname: '',
      lastname: '',
    }))
  }

  render() {
    const {isTrue, showFirstNameError, showLastNameError} = this.state

    const className = showFirstNameError ? 'inputBoxupdated' : 'normalBox'

    return !isTrue ? (
      <div className="container">
        <h1 className="Registration-From">Registration</h1>
        <div className="inner-container">
          <form className="form-container" onSubmit={this.submitButton}>
            <div className="input-con">
              <label htmlFor="inputFirstName" className="names">
                First Name
              </label>

              <input
                id="inputFirstName"
                onBlur={this.eventHandlerFirstName}
                onChange={this.onChangeFirstName}
                className={`input ${className}`}
                placeholder="First name"
              />

              {showFirstNameError && <p className="error-msg">Required</p>}
            </div>
            <div className="input-con">
              <label htmlFor="inputLastName" className="names">
                Last Name
              </label>

              <input
                id="inputLastName"
                onBlur={this.eventHandlerLastName}
                onChange={this.onChangeLastName}
                className={`input ${className}`}
                placeholder="Last name"
              />

              {showLastNameError && <p className="error-msg">Required</p>}
            </div>
            <div className="button-con">
              <button type="submit" className="submitButton">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <div className="container">
        <h1 className="Registration-From">Registration</h1>
        <div className="inner-container">
          <form className="form-container" onSubmit={this.responseButton}>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="successImage"
              />
            </div>
            <p className="description">Submitted Successfully</p>
            <div className="button-con">
              <button type="submit" className="submitButton">
                Submit Another Response
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
