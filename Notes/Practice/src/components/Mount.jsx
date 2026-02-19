import React ,{ Component} from "react";
 export class Mount extends Component{
 constructor(){
    super();
    console.log("constructor ");
 }

static  getDerivedStateFromProps(){

    console.log("derivedStateFromProps");
 }

 render(){
    console.log("render");
 }

 componentDidMount(){
    console.log("ComponentdidMOunt");
 }

}