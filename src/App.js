// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Step from "./components/Step";

function App() {
  return (
    <div className="App">
      <h1>test eric</h1>
      <div className="nav w-100 d-flex justify-content-evenly">
        <div className="w-75">
          <Step direction="right" instructions="turn right at fulerton ave." distance={3.2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
