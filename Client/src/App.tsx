import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import { Route, Routes } from "react-router-dom";
import Result from "./pages/Result";
import Plans from "./pages/Plans";
import Community from "./pages/Community";

import Loading from "./pages/Loading";
import MyGnerations from "./pages/MyGnerations";
import Genetator from "./pages/Genetator";

function App() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Genetator />} />
        <Route path="/community" element={<Community />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/my-generations" element={<MyGnerations />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/result/:projectId" element={<Result />} />
      </Routes>

      <Footer />
    </>
  );
}
export default App;
