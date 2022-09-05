import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Intro/mainpage/Main";
import SubMain from "./Main/SubMain";

function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/SubMain">
          <SubMain />
        </Route>
      </Router>
    </>
  );
}

export default App;
