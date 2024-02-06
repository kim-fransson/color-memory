import { initialState, gameReducer } from "@/reducers/gameReducer";
import { PropsWithChildren, createContext, useMemo, useReducer } from "react";

export const GameContext = createContext(initialState);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startCountdown = (level = 0, score = 0) => {
    dispatch({
      type: "COUNTDOWN",
      payload: {
        level: level + 1,
        score,
      },
    });
  };

  const startSequence = () => {
    dispatch({
      type: "SEQUENCE",
    });
  };

  const startGameplay = () => {
    dispatch({
      type: "GAMEPLAY",
    });
  };

  const gameOver = () => {
    dispatch({
      type: "GAME_OVER",
    });
  };

  const nextTurn = () => {
    dispatch({
      type: "NEXT_TURN",
    });
  };

  const addPoint = () => {
    dispatch({
      type: "ADD_POINT",
    });
  };

  const quit = () => {
    dispatch({
      type: "INITIAL",
    });
  };

  const memoizedValue = useMemo(() => {
    return {
      ...state,
      startCountdown,
      startSequence,
      startGameplay,
      gameOver,
      addPoint,
      nextTurn,
      quit,
    };
  }, [state]);

  return (
    <GameContext.Provider value={memoizedValue}>
      {children}
    </GameContext.Provider>
  );
};
