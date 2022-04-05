
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Footer } from './components/index';
import Home from "../src/Pages/home-page/Home";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


