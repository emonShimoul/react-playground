import React, { Component } from 'react'
import Button from './Button';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date(), locale: 'bn-BD'};
  }

  componentDidMount(){
    this.clockTimer = setInterval(()=>this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  // if the normal function is used then the 'this' will give an error because the handleClick is working as a callback function in the button. to solve the error there are two way. one is use of the arrow function and another is use of the 'bind' method.
  
  // handleClick(locale) {
  //   // console.log(this);
  //   this.setState({
  //     locale
  //   });
  // }

  //  used arrow function to solve the 'this' keyword error. this is better solution.
  handleClick = (locale) => {
    // console.log(this);
    this.setState({
      locale
    });
  }

  tick(){
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("Clock rendered!!");
    const {date, locale} = this.state;
    return (
      <div>
        <h1>
        <span>
            {date.toLocaleTimeString(locale)}
        </span>
      </h1>
      {/* here using bind a way to solve the 'this' keyword error in a callback function (here in the button handleClick is working as a callback function)
       but the better way is to use an arrow function */}
      {/* <button onClick={this.handleClick.bind(this, 'en-US')}>Click Here</button> */}

      {/* <button onClick={() => this.handleClick('en-US')}>Click Here</button> */}

      <Button change={this.handleClick} locale="en-US">Click Here</Button>
      </div>
    );
  }
}

export default Clock;
