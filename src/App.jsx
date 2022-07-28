import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <h1 className="text-xl font-bold text-revire-primary text-center">
        Hello World! 🚀
      </h1>
      <Button label="Primary" type="primary" />
      <Button label="Secondary" type="secondary" />
    </div>
  );
}

export default App;
