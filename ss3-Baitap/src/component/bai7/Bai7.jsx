import React, { Component } from 'react'

export default class Bai7 extends Component {
    constructor(){
        super()
        this.state={
            chieucao : "",
            cannang : "",
            ketqua : ""
        }
    }
    handleChieucao = (e) => {
        this.setState({
            chieucao:e.target.value,
        })
    }
    cannang = (e) => {
        this.setState({
            cannang:e.target.value
        })
    }
    total = () =>{
        const arr=this.state.cannang/(this.state.chieucao*this.state.chieucao);
        if(arr > 0 && arr <18.5){
            this.setState({
                ketqua: "gầy"
            })
        }else if (arr > 18.5 && arr <25){
            this.setState({
                ketqua: "Bình thường"
            })
        }else{
            this.setState({
                ketqua:"Béo vl"
            })
        }
    }
  render() {
    
    return (
      <>
        <label>Nhập chiều cao đơn vị m2 :</label>
        <input type='text'
         placeholder='Nhập chiều cao'
        onChange={this.handleChieucao} >
          </input><br></br>
        <label>Nhập Cân nặng đơn vị kg :</label>
        <input type='text' placeholder='Nhập cân nặng' onChange={this.cannang}></input><br></br>
        <button onClick={this.total}>CLick</button>
        <p>Tình trạng sức khỏe của bạn :{this.state.ketqua} </p>
      </>
    )
  }
}

