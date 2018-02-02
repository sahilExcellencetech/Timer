import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {seconds : 0}
  }

  tick() {
    this.setState(prevState => ({seconds : prevState.seconds + 1}));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
      <div>
        <h1>Your time on this webpage :{this.state.seconds}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById('root'));
