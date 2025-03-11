import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WelcomePage from "./routes/WelcomePage";
// import InvitationCard from "./routes/InvitationCard";
import WeddingLanding from "./routes/WeddingLandingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WeddingLanding />} />
          {/* <Route path="/details" element={<InvitationCard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
