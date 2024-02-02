import { HelpButton, NewGame, SoundToggle } from "./components/buttons";
import { Gamepad } from "./components/displays";

export default function App() {
  return (
    <div className="relative min-h-dvh">
      <HelpButton className="absolute md:top-8 md:left-8 top-4 left-4" />
      <SoundToggle className="absolute md:top-8 md:right-8  top-4 right-4" />

      {/* Home/Start */}
      <div className="absolute-center">
        <div className="inline-grid justify-items-center md:gap-8 gap-4">
          <h2 className="md:text-heading-m text-heading-m-mobile">COLOR MEMORY</h2>
          <Gamepad />
          <NewGame className="w-full" />
        </div>
      </div>
    </div>
  );
}
