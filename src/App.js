import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <Recommended />
              </div>
            }
          />
          <Route path="/search/:se" element={<>
            <div className="app__page">
                <Sidebar />
                <SearchPage/>
              </div>
          </>} />
          <Route path="/search/" element={<>
            <div className="app__page">
                <Sidebar />
                <h2 style={{margin:"auto auto"}}>Search Something...</h2>
              </div>
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
