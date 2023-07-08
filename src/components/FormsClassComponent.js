import React, { Component } from "react";

export class FormsClassComponent extends Component {
  constructor() {
    super();

    this.state = {
      n: "",
      name:""
    };
  }

   
  render() {
    return (
      <>
      <div>Class Form</div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          this.setState({
            name:this.state.n,
            n:""
          })
        }}>
          <input
            type="text"
            name="text element"
            value={this.state.n}
            onChange={(e) => {
             this.setState({
              n:e.target.value
             })
            }}
          ></input>
          <button>Submit</button>
        </form>

        <div>{this.state.name}</div>
      </>
    );
  }
}
