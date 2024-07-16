import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadVideo from "./pages/UploadVideo";

function App() {
  return (
    <Router>
      <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<UploadVideo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
