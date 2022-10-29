import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/profile' element={<Profile/>} />
       <Route path='/sign-in' element={<SignIn/>} />
       <Route path='/sign-up' element={<SignUp/>} />
       <Route path='/offers' element={<Offers/>} />
       <Route path='/forgot-password' element={<ForgotPassword />} />
    
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
