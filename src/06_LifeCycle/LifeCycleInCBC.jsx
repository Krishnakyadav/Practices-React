import { Component } from "react";

class LifeCycleInCBC extends Component {
    constructor(){
        super();
        this.state={count:0}
    }
    increment=()=>{
        this.setState((prev)=>{
            return {count:prev.count+1}
        });
    }
    componentDidMount(){
        console.log("Component mounted");
        this.id = setInterval(()=>{
            console.log("api call")
        },2000)
       
    }
    componentDidUpdate(){
        console.log("Component updated");
    }
    componentWillUnmount(){
        console.log("component unmounted");
        clearInterval(this.id);
    }
  render() {
    return (
      <div>
        <h1>LifeCyclInCBC {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default LifeCycleInCBC;
