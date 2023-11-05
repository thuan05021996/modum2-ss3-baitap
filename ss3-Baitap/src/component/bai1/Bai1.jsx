import React, { Component } from 'react'

export default class Bai1 extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleCount =() =>{
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    return (
      <>
        <p>count  {this.state.count}</p>
        <button onClick={this.handleCount}>Click</button>
      </>
    )
  }
}
