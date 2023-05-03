import { Route, Routes } from "react-router-dom";
import Analytics from "../pages/Analytics/Analytics";
import DataSearch from "../pages/DataSearch/DataSearch";
import Home from "../pages/Home/Home";
import Publications from "../pages/Publications/Publications";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<DataSearch />} />
      <Route path="/analytics" element={<Analytics />} />

      <Route path="/search/publications" element={<Publications />} />
      <Route path="/search/authors" element={<div>...</div>} />
      <Route path="/search/organizations" element={<div>...</div>} />
      <Route path="/search/citations" element={<div>...</div>} />
      <Route path="/search/scientific-direction" element={<div>...</div>} />
      <Route path="/search/index-h" element={<div>...</div>} />
      <Route path="/search/publication-source" element={<div>...</div>} />
    </Routes>
  );
}

export default App;
