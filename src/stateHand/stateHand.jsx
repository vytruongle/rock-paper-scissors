const intitalState = {
  playerHand: "",
  comHand: "",
  winTimes: 0,
  totalTimes: 0,
};

const handReducer = (state = intitalState, action) => {
  switch (action.type) {
    case "SELECT": {
      let stateClone = { ...state };
      stateClone.playerHand = action.payload;
      state = { ...stateClone };
      return { ...state };
    }
    case "PLAY": {
      let stateClone = { ...state };
      let handState = ["bao", "bua", "keo"];
      if (stateClone.playerHand.length > 0) {
        let num = Math.floor(Math.random() * 3);
        stateClone.comHand = handState[num];
        if (stateClone.comHand === "bao" && stateClone.playerHand === "keo") {
          stateClone.winTimes += 1;
        }
        if (stateClone.comHand === "bua" && stateClone.playerHand === "bao") {
          stateClone.winTimes += 1;
        }
        if (stateClone.comHand === "keo" && stateClone.playerHand === "bua") {
          stateClone.winTimes += 1;
        }
        stateClone.totalTimes += 1;
      }
      state = { ...stateClone };
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default handReducer;
