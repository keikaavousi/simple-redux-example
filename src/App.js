import Main from "./Main";

import { useSelector } from "react-redux";

function App() {
  const val = useSelector((state) => state.counter);
  return (
    <div className="App">
      <h1>{val}</h1>
      <Main />
    </div>
  );
}

export default App;
