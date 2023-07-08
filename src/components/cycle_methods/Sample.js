import React, { Component } from "react";

export class Sample extends Component {
  contructor() {
  }

  componentDidMount() {
    console.log("component mounting stage");
   this.setState({
    show:"ok"
   })
  }

  componentDidUpdate() {
    console.log("componet updating stage");
  }

  componentWillUnmount() {
    console.log("componnet will unmount");
  }

  clickHandler = () => {
    this.setState({
      show: "notok",
    });
  };
  render() {
    return (
      <>
        <div>Component Life Cycle Methods</div>

        {console.log(this.state?.show)}
         {this.state?.show ==="ok" ? (
          <div>This content will hide, when button is pressed!</div>
        ) : (
          <div></div>
        )} 
        <button onClick={this.clickHandler}>Click To Hide</button>
      </>
    );
  }
}










