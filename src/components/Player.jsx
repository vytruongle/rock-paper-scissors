import React, { Component } from "react";
import { connect } from "react-redux";

import "./buble.css";
import "./MiniGame.css";

class Player extends Component {
  render() {
    let imagePlayer = `./image/${this.props.playerHand}.png`;
    return (
      <div>
        <div className="speech-bubble stateImg">
          <img style={{ width: "100%" }} src={imagePlayer} alt="" />
        </div>
        <div className="playerImg">
          <img className="w-100" src="./image/player.png" alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playerHand: state.handReducer.playerHand,
  };
};

export default connect(mapStateToProps, null)(Player);
