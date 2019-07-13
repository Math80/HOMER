import React, {Component} from 'react';

class Write extends Component {
  constructor (props){
    super(props);
    this.state={
      count: 0,
      title: '',
      email: '',
    }
    this.getMore = this.getMore.bind(this)
    this.getLess = this.getLess.bind(this)
    this.changeTitle = this.changeTitle.bind(this)
  }

  getMore() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  getLess() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  changeTitle(event) {
    this.setState({
      title: event.target.value,
    })
  }


  render() {
    const ticount = (this.state.count);
    const tiwrite = (this.state.title)
    return(
      <div className="Write">
        <h2>COUNT: {ticount}</h2>
        <button onClick={this.getLess}>GET LESS</button>
        <button onClick={this.getMore}>GET MORE</button>
        <h1>TEXTE:</h1>
        <h2>{tiwrite}</h2>
        <input type="text" name="text" onChange={this.changeTitle}/>

      </div>
    )
  }
}

export default Write;