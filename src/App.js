import './App.css';
import './Style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HangMan from "./Component/HangMan"
import Header from './Component/Header';
import Number from './Component/Number';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/hangman" element={<HangMan />} />
          <Route path="/number" element={<Number />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
