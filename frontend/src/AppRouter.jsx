import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Careers from "./Pages/Careers";
import Bootcamp from "./Pages/Bootcamp";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path = "/bootcamp/web-dev" element={<Bootcamp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
