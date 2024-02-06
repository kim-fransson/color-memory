import { generateSequence } from "@/utils";

export const initialState: GameState = {
  currentStep: "INITIAL",
  level: 1,
  score: 0,
  sequence: [],
  quit: () => {},
  startCountdown: () => {},
  startSequence: () => {},
  startGameplay: () => {},
  gameOver: () => {},
  nextTurn: () => {},
  addPoint: () => {},
};

export const gameReducer = (
  state: GameState,
  action: GameAction,
): GameState => {
  switch (action.type) {
    case "INITIAL":
      return { ...state, currentStep: "INITIAL" };
    case "COUNTDOWN":
      return {
        ...state,
        currentStep: "COUNTDOWN",
        score: action.payload.score,
        level: action.payload.level,
      };
    case "SEQUENCE":
      return {
        ...state,
        currentStep: "SEQUENCE",
        sequence: generateSequence(state.level),
      };
    case "GAMEPLAY":
      return { ...state, currentStep: "GAMEPLAY" };
    case "GAME_OVER":
      return { ...state, currentStep: "GAME_OVER" };
    case "NEXT_TURN":
      return { ...state, currentStep: "NEXT_TURN" };
    case "ADD_POINT":
      return { ...state, score: state.score + 1 };
    default: {
      return state;
    }
  }
};
