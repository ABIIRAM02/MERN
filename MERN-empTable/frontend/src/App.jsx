import SignUp from './Components/SignUp';
import './index.css'
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import EmployeeList from './Components/EmployeeList';
import Protect from './Protect';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';

function App() {
  return (
    <div className="bg-dimwhite">
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home' element={<Protect child={<Home/>} />} />
        <Route path='/employeelist' element={<Protect child={<EmployeeList/>} />} />
        <Route path='/addemployee' element={<Protect child={<AddEmployee/>} />} />
        <Route path='/updateemployee' element={<Protect child={<UpdateEmployee/>} />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
