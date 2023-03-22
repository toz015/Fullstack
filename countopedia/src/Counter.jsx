import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this); //need to bind method with the method we made
    this.handleDefend = this.handleDefend.bind(this);
    this.state = {
      count: 0,
      lastPlay: "",
      gameStatus: "",
    };
  }

  handleAttack = () => {
    //alert("Attack clicked");
    //this.setState({ count: this.state.count + 1 }); //need setState to change state
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "Attack",
        gameStatus: newCount > 10 ? "You Won!!!" : previousState.gameStatus,
      };
    });
    // this.setState((previousState) => {
    //     return {
    //       count: previousState.count + 10,
    //     };
    //   });
  };
  handleDefend = () => {
    //alert("Defend clicked");
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        lastPlay: "Defence",
        gameStatus: newCount < -10 ? "You Lost." : previousState.gameStatus,
      };
    });
  };

  handleRandomPlay = () => {
    //if we want to use this function, must write as functionName = () =>
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
      this.handleAttack();
    } else {
      this.handleDefend();
    }
  };

  handleReset = () => {
    this.setState(() => {
      let newCount = 0;
      return {
        count: newCount,
        gameStatus: "",
        lastPlay: "",
      };
    });
  };

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count} </h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play:{this.state.lastPlay} </p>
        <h3>Game Status : {this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          />
        </div>
        <div className="col-6 col-md-3 ">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefend}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <br />
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
