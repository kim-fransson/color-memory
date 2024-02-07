import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";
import { GameProvider } from "./context/GameContext";
import { SoundProvider } from "./context/SoundContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SoundProvider>
    <GameProvider>
      <Game />
    </GameProvider>
  </SoundProvider>,
);
