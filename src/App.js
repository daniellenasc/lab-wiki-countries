import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import coutriesData from "./countries.json"
import { Navbar } from './components/Navbar';
import CountriesList from './components/CountriesList';


function App() {
  return (

    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
      
          <div className="container">        
        
            <div className="row">
          
              <Route path="/" element={ <CountriesList country={coutriesData} /> } />
          
             </div>
           </div>
          </Routes>
      </BrowserRouter>
      


    </div>
  );
}

export default App;
