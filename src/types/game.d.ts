type Color = "red" | "green" | "blue" | "yellow";

type GameState = {
  currentStep: GameStep;
  sequence: Color[];
  level: number;
  score: number;
  startCountdown: (level?: number, score?: number) => void;
  startSequence: () => void;
  startGameplay: () => void;
  addPoint: () => void;
  nextTurn: () => void;
  gameOver: () => void;
  quit: () => void;
};

type GameStep =
  | "INITIAL"
  | "COUNTDOWN"
  | "SEQUENCE"
  | "GAMEPLAY"
  | "GAME_OVER"
  | "NEXT_TURN"
  | "ADD_POINT";

type InitialAction = {
  type: "INITIAL";
};

type CountdownAction = {
  type: "COUNTDOWN";
  payload: {
    level: number;
    score: number;
  };
};

type SequenceAction = {
  type: "SEQUENCE";
};

type GameplayAction = {
  type: "GAMEPLAY";
};

type GameOverAction = {
  type: "GAME_OVER";
};

type NextTurnAction = {
  type: "NEXT_TURN";
};

type AddPointAction = {
  type: "ADD_POINT";
};

type GameAction =
  | InitialAction
  | CountdownAction
  | SequenceAction
  | GameplayAction
  | LostAction
  | WonAction;
