import './App.css';
import MainSection from './components/main-section/MainSection';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import QuemSomos from './components/quem-somos/QuemSomos';
import AmigoSangue from './components/amigo-sangue/AmigoSangue';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <MainSection />
        <QuemSomos />
        <AmigoSangue />
      </div>
    </BrowserRouter>
  );
}

export default App;
