import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Catalogue from "./pages/Catalogue";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Listing from "./pages/Listing";
import AllProperty from "./pages/AllProperty";
import ECertificate from "./pages/ECertificate";
import AssetManager from "./pages/AssetManager";
import Upload from "./pages/Upload";
import Setup from "./pages/Setup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="listing" element={<Listing />} />
        <Route path="all-property" element={<AllProperty />} />
        <Route path="e-certificate" element={<ECertificate />} />
        <Route path="asset-manager" element={<AssetManager />} />
        <Route path="upload" element={<Upload />} />
        <Route path="setup" element={<Setup />} />
      </Routes>
    </Router>
  );
}

export default App;
