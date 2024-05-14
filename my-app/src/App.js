import './App.css';
import TourDetails from './components/TourDetails/TourDetails';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/city/:id" element={<TourDetails/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
