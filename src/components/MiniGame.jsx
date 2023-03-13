import React, { Component } from "react";
import { connect } from "react-redux";
import Computer from "./Computer";
import Player from "./Player";

import "./MiniGame.css";

class MiniGame extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="">
            <Player />
            <div className="d-flex align-items-center">
              <button
                className="btn buttonWid"
                onClick={() => {
                  this.props.onSelect("keo");
                }}
              >
                <img className="img-fluid" src="./image/keo.png" alt="" />
              </button>
              <button
                className="btn buttonWid"
                onClick={() => {
                  this.props.onSelect("bua");
                }}
              >
                <img className="img-fluid" src="./image/bua.png" alt="" />
              </button>
              <button
                className="btn buttonWid"
                onClick={() => {
                  this.props.onSelect("bao");
                }}
              >
                <img className="img-fluid" src="./image/bao.png" alt="" />
              </button>
            </div>
          </div>
          <div>
            <p className="textColor">SỐ BÀN THẮNG:{this.props.winTimes}</p>
            <p className="textColor">SỐ BÀN CHƠI:{this.props.totalTimes}</p>
            <button className="btn btn-success" onClick={this.props.onPlay}>
              Play game
            </button>
          </div>
          <div>
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    winTimes: state.handReducer.winTimes,
    totalTimes: state.handReducer.totalTimes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (handStyle) => {
      const action = {
        type: "SELECT",
        payload: handStyle,
      };
      dispatch(action);
    },
    onPlay: () => {
      const action = {
        type: "PLAY",
        payload: "",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniGame);
