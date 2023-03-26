import { Route, Routes } from "react-router-dom";
import Analytics from "../pages/Analytics/Analytics";
import DataSearch from "../pages/DataSearch/DataSearch";
import Home from "../pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<DataSearch />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;
