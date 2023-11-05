import React, { Component } from 'react'
import Liststudent from './Liststudent'
import Sort from './Sort'
import Search from './Search'

export default class Bai4 extends Component {
    constructor(){
        super()
        this.state={
            students:[
                {
                    name:"thuận",
                    age:18,
                    id: "001"
                },
                {
                    name:"ngọc",
                    age:20,
                    id: "002"
                },
                {
                    name:"chúc",
                    age:19,
                    id: "003"
                },
                {
                    name:"dương",
                    age:21,
                    id: "004"
                }
            ],
            searchValue:"",
            sort:""
        }
    }
    searchValue=(value)=>{
        this.setState({
            searchValue:value
        })
    }
    sortAge=(value)=>{
        this.setState({
            sort:value
        })
    }
  render() {
    let student = []
    if(this.state.searchValue != ""){
        this.state.sort = ""
        let result = this.state.students.filter((item)=>{
            return item.name.indexOf(this.state.searchValue) != -1
        })
        if(result.length == 0){
            student = this.state.students
        }else{
            student = result
        }

    }else{
        student = this.state.students
    }

    if(this.state.sort != ""){
        if(this.state.sort == "tang"){
            let result = this.state.students.sort((a,b)=>a.age - b.age)
            student = result
        }else{
            let result = this.state.students.sort((a,b)=>b.age - a.age)
            student = result
        }
    }
        
    

    return (
      <>
      <Search search={this.searchValue}></Search>
      <Sort sort={this.sortAge}></Sort>
      <Liststudent students={student}></Liststudent>
      </>
    )
  }
}
