import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import Main from "./Intro/mainpage/Intro";
import SubMain from "./Domestic/DomMain";

function App() {
  return (
    <>
      {/* 이게 6버전 */}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SubMain" element={<SubMain />} />
        </Routes>
        <ScrollTop />
      </Router>
    </>
  );
}

export default App;
