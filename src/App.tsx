import raceSeed from "./data/sample-drivers.json";
import { Dashboard } from "./components/layout/Dashboard";
import type { RaceSeed } from "./types";

const seed: RaceSeed = raceSeed;

function App() {
  return <Dashboard seed={seed} />;
}

export default App;
