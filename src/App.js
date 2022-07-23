// import logo from './logo.svg';
// import './App.css';
import Wheather from "./Component/Wheather";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  return (
    <ErrorBoundry>
      <Wheather />
    </ErrorBoundry>
  );
}

export default App;
