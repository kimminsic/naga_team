import { BrowserRouter as Routes, Route } from "react-router-dom";
import Main from "./mainpage/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Main />
        </Route>
      </Routes>
    </>
  );
}

export default App;