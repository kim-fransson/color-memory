import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";
import { GameProvider } from "./context/GameContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GameProvider>
    <Game />
  </GameProvider>,
);
