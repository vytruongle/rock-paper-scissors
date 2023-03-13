import React, { Component } from "react";
import { connect } from "react-redux";

import "./buble.css";

class Computer extends Component {
  render() {
    let handComImg = `./image/${this.props.comHand}.png`;
    return (
      <div>
        <div className="speech-bubble stateImg">
          <img className="w-100" src={handComImg} alt="" />
        </div>
        <div className="playerImg">
          <img className="w-100" src="./image/playerComputer.png" alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comHand: state.handReducer.comHand,
  };
};

export default connect(mapStateToProps, null)(Computer);
