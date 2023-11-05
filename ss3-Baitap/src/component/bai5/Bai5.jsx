import React, { Component } from 'react'

export default class Bai5 extends Component {
    constructor (){
        super()
        this.state={
            img:[
                "./ảnh/baby-bear.jpg",
                "./ảnh/bird.jpg",
                "./ảnh/dog.jpg",
                "./ảnh/curious-cat.jpg"
            ],
            page :1
        }
    }
    next = () =>{
        this.setState({
            page:this.state.page+1
        })
    }
    pre = () =>{
        this.setState({
            page :this.state.page - 1
        })
    }
  render() {
   /*  if(this.state.page==3){
       return 
    } */
    return (
      <>
        
        <img src={this.state.img[this.state.page]}></img>
        <button onClick={this.next}>Next</button><button onClick={this.pre}> pre</button>
     {/*    <p>đây là trang : {this.state.page}</p> */}
      </>
    )
  }
}
