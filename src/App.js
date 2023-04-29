
import './App.css';
import Sidebar from './SideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactMaker from './ContactMaker/ContactMaker';
import ContactEdit from './ContactEdit';
import ContactDetails from './ContactDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar />}></Route>
          <Route path='/details/:name' element={<ContactDetails />}></Route>
          <Route path='/contactMaker' element={<ContactMaker />}></Route>
          <Route path='/contactEditor/:name' element={<ContactEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
