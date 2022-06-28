import {Routes,Route} from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
