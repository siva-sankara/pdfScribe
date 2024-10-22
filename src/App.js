import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LandingPgae from "./pages/landingpage/LandingPgae";
import PdfCreator from "./pages/pdfcreator/PdfCreator";
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPgae />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/pdfconvertor" element={<PdfCreator />} />
      </Routes>
  </Router>
  );
}

export default App;
