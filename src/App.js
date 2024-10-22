import './App.css';
import MainSection from './components/main-section/MainSection';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import QuemSomos from './components/quem-somos/QuemSomos';
import AmigoSangue from './components/amigo-sangue/AmigoSangue';    
import PerfectScrollbar from 'react-perfect-scrollbar'
import Devs from './components/devs/Devs';

function App() {
  
  return (
    <BrowserRouter>
    <PerfectScrollbar>
      <div className="App">
        <Navbar />
        <MainSection />
        <QuemSomos/>
        <AmigoSangue />
        <Devs/>
      </div>
    </PerfectScrollbar>
    </BrowserRouter>
  );
}

export default App;
