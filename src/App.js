import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";

// Import all pages
import Home from "./component/Home.js";
import AboutUs from "./component/AboutUs.js";
import Services from "./component/Services.js";
import Calculators from "./component/Calculators.js";
import Testimonials from "./component/Testimonials.js";
import Blog from "./component/Blog.js";
import ContactUs from "./component/ContactUs.js";

// import Sydney from "./pages/Sydney";
// import Melbourne from "./pages/Melbourne";
// import Brisbane from "./pages/Brisbane";
// import Adelaide from "./pages/Adelaide";
// import Canberra from "./pages/Canberra";
// import Tasmania from "./pages/Tasmania";
// import Perth from "./pages/Perth";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Country Pages */}
        {/* <Route path="/sydney" element={<Sydney />} />
        <Route path="/melbourne" element={<Melbourne />} />
        <Route path="/brisbane" element={<Brisbane />} />
        <Route path="/adelaide" element={<Adelaide />} />
        <Route path="/canberra" element={<Canberra />} />
        <Route path="/tasmania" element={<Tasmania />} />
        <Route path="/perth" element={<Perth />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
