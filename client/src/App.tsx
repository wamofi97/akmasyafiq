import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeddingLanding from "./routes/WeddingLandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WeddingLanding />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
