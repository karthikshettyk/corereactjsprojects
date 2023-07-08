import React, { Component } from "react";

class ClassBasedComponent extends Component{
    constructor() {
        super();
        //state in the class based component
        this.state={
            color:"red"
        }
      }
    render(){
       return( <>I am class based component {this.props.name} {this.props.age} {this.state.color}</>);
    }

}

export default ClassBasedComponent;