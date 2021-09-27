import "./App.css";
import DopComponent from "./components/DopComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DopComponent helloText={"My name is Alina"} isAdmin={true} />
      </header>
    </div>
  );
}

export default App;
