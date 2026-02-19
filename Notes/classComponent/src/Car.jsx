import React from "react";
 export class Car extends React.Component{

    constructor(props){
        super(props)

        this.state={
            color:"yellow"
        };

    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        return <div>color before {prevState}</div>
    }

    shouldComponentUpdate(){
        return true;
    }

        changeColor=()=>{
            this.setState({color:"blue"})
        }


    

    render(){
       return  <>
       <h1>hello {this.props.name}</h1>
       <p>{this.state.color}</p>
       <button onClick={this.changeColor}>Change color</button>

       </>
}
}