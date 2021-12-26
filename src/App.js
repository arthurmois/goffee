
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <GeistProvider>
        <CssBaseline />
        <Home />
      </GeistProvider>
    </div>
  );
}
export default App;