import { Component } from "react";
class LifeCycle extends Component {
    componentDidMount(){
        console.log("component mounted")
    }
    componentDidUpdate(){
        console.log("component updated")
    }
    componentWillUnmount(){
        console.log("component unmounted")
    }
  render() {
    return (
      <div>
        <h1>LifeCycle method</h1>
      </div>
    );
  }
}

export default LifeCycle;
