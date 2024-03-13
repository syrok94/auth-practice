import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/"  element={<Login/>}/> */}
          <Route path="/"  element={<HomePage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
