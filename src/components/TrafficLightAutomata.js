import * as React from "react";
import { withStateMachine } from "react-automata";
import Green from "./Green";
import Yellow from "./Yellow";
import Red from "./Red";
import '../styles.css'
class TrafficLight extends React.PureComponent {

  transition = () => {
    this.props.transition("NEXT");
  };

  constructor(props) {
    super(props);
    this.state = {
      bgColorRed: "",
      bgColorGreen:"",
      bgColorYellow:""
    }
  }



  boxClickRed = (e) => {
    this.setState({
      bgColorRed: "#b30000",
      bgColorGreen:"",
      bgColorYellow:"",
      
    })

    this.props.machineState.value="RED"
    console.log(this.props)
  }

  boxClickYellow = (e) => {
    this.setState({
      bgColorYellow: "#b2b300",
      bgColorGreen:"",
      bgColorRed:""
    })
    this.props.machineState.value="YELLOW"
    console.log("YELLOW")

  }

  boxClickGreen = (e) => {
    this.setState({
      bgColorGreen: "#00b300",
      bgColorRed:"",
      bgColorYellow:""
    })
    this.props.machineState.value="GREEN"
    console.log("GREEN")

  }



  waitShortInterval() {
    setTimeout(this.transition, 5000);
  }

  waitLongInterval() {
    setTimeout(this.transition, 20000);
  }

  waitMedianInterval() {
    setTimeout(this.transition, 15000);
  }

  render() {
    const { machineState } = this.props;

    return (
      <div>

<h1>HackLab Solutions - Assignment_1 & 1.1</h1>
        <hr/>
        <div  id="btns">
           
        <button className="boxClickRed" 
          style={{backgroundColor: this.state.bgColorRed}}
           onClick={this.boxClickRed}>Red</button>
      

        <button className="boxClickYellow" 
          style={{backgroundColor: this.state.bgColorYellow}}
           onClick={this.boxClickYellow}>Yellow</button>
    

      
        <button className="boxClickGreen" 
          style={{backgroundColor: this.state.bgColorGreen}}
           onClick={this.boxClickGreen}>Green</button>
     
       
   </div>
<hr/>

        <div id="board">
         
          <Red isOn={machineState.value === "RED"} />
          <Yellow isOn={machineState.value === "YELLOW"} />
          <Green isOn={machineState.value === "GREEN"} />
          
        </div>

        <div id="author">
            <p>Programmed by</p>
            <h3>Kavinbharathi A</h3>
        </div>
           
       
      </div>
    );
  }
}

const stateChart = {
  initial: "RED",
  states: {
    GREEN: {
      on: {
        GREEN: "GREEN",
        NEXT:"YELLOW"
      },
      onEntry: "waitMedianInterval"
    },
    YELLOW: {
      on: {
        YELLOW: "YELLOW",
        NEXT:"RED"
      },
      onEntry: "waitShortInterval"
    },
    RED: {
      on: {
        RED: "RED",
        NEXT:"GREEN"
      },
      onEntry: "waitLongInterval"
    }
  }
};



export default withStateMachine(stateChart)(TrafficLight);
