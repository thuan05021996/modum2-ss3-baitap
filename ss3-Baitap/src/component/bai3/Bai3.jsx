import React, { Component } from 'react'

export default class Bai3 extends Component {
    constructor(){
        super()
        this.state={
            text:"",
            newtext:""
        }
    }
    handleValue = (e) => {
        this.setState({
            text:e.target.value
        })
    }
    add = () => {
        this.setState({
            newtext:this.state.text
        })
    }
  render() {
    return (
      <>
        <p>{this.state.newtext}</p>
        <input type='text' onChange={this.handleValue}></input>
        <button onClick={this.add}>Click</button>
      </>
    )
  }
}
