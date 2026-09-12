import raceSeed from "./data/sample-drivers.json";
import type { RaceSeed } from "./types";
import { Dashboard } from "./components/layout/Dashboard";
import { RaceProvider } from "./context/RaceProvider";

const seed: RaceSeed = raceSeed;

function App() {
  return (
    <RaceProvider seed={seed}>
      <Dashboard />
    </RaceProvider>
  );
}

export default App;
