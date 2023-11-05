import React, { Component } from 'react'

export default class Bai2 extends Component {
    constructor(){
        super()
        this.state={
            text:"một vòng trái đất",
            newtext:"em ngồi đây"
        }
    }
    handleNewtext = ()=>{
        this.setState({
            text:this.state.newtext
        })
    }
  render() {
    return (
      <>
        <p>{this.state.text}</p>
        <button onClick={this.handleNewtext}>CLick</button>
      </>
    )
  }
}
