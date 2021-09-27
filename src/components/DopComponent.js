import logo from "../logo.svg";
import "../App.css";
import { Button } from "@material-ui/core";
import Example from "../containers/example";

const DopComponent = ({ helloText, count, isAdmin }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{helloText}</p>

        <a className="App-link" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button
          variant="contained"
          href="https://youtu.be/RG_tWoYIQ5Q"
          color="secondary"
        >
          Посмотреть видос
        </Button>
      </header>
      <div>
        <Example />
      </div>
    </div>
  );
};
export default DopComponent;
