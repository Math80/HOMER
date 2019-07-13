import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      lastname: '',
    }
    this.updateEmailField = this.updateEmailField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateEmailField(event) {
    this.setState({
      email: event.target.value,
    })
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();

  }

  render() {
    const tiemail = (this.state.email)
    const formule = JSON.stringify(this.state)
    return(
      <div className="SignUp">
        <form onSubmit={this.handleSubmit}>
          <h1>{formule}</h1>
          <h2>EMAIL:</h2>
          <h2>{tiemail}</h2><input type="email" name="email" onChange={this.updateEmailField} />
          <h2>Password:</h2><input type="password" name="age" onChange={this.updateEmailField} />
          <h2>Passwordbis:</h2><input type="password" name="age" onChange={this.updateEmailField} />
          <h2>Name:</h2><input type="text" name="name" onChange={this.updateEmailField} />
          <h2>Lasttname:</h2><input type="text" name="firstname" onChange={this.updateEmailField} />
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default SignUp;