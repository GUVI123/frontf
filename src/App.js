import './App.css';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import  Logout from './Logout';
import  ResetPassword from './ResetPassword';
import  Login from './Login';
import  {Link} from'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      <p>User Account Creation</p>
        <Routes>
        <Route path="/Register" element={<Register/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/Logout" element={<Logout/>} />
        <Route path="/ResetPassword" element={<ResetPassword/>} />
        <Route path="/Login" element={<Login/>} />
          </Routes>
          <div className='link'>
          <Link to="/Register"className='reg'>Click for Register</Link>
          <Link to="/Login" className='log'>Login</Link>
          <Link to="/ForgotPassword" className='for'>ForgotPassword</Link>
          <Link to="/ResetPassword" className='res'>ResetPassword</Link>
          <Link to="/Logout"className='out'>Logout</Link>
          </div>
          </div>
  );
  
}

export default App;
