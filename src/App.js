
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './component/header/Nav';
import Signin from './component/signin/Signin';
import Signup from './component/signup/Signup';
import Footer from './component/footer/Footer';





function App() {
  return (
    <>
      <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/success' element={'success'}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
