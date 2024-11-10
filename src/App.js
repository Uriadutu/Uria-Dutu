import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreenPage from "./Pages/SplashScreenPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreenPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
