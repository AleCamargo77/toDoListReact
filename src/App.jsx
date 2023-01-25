import "./App.css";
import AnotherComponent from "./components/AnotherComponent";
import FirstComponent from "./components/FirstComponent";
import Images from "./components/Images";
import Hooks from "./components/Hooks";

function App() {
  return (
    <div className="App">
      <h1>Heloooo</h1>
      <FirstComponent />
      <Hooks />
      <Images />
      {/* <AnotherComponent /> */}
    </div>
  );
}

export default App;
