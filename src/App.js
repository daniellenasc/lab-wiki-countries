import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import coutriesData from "../../countries.json"
import { Navbar } from './components/Navbar';


function App() {
  return (

    <div className="App">
      <Navbar />
    
      <BrowserRouter>
        <Routes>        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
