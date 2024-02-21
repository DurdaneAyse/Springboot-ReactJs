import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent'
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreenComponent from './components/HomeScreenComponent';
import CreateOrUpdateStudentComponent from './components/CreateOrUpdateStudentComponent';

function App() {
  return (
    <BrowserRouter>
          <HeaderComponent/>
      <Routes>
        <Route path="/" element={<HomeScreenComponent />}></Route>
        <Route path="/students" element={<ListStudentComponent />}></Route>
        <Route path="/add-student" element={<CreateOrUpdateStudentComponent />}></Route>
        <Route path='/edit-student/:id' element = {<CreateOrUpdateStudentComponent/>}></Route>

      </Routes>
    </BrowserRouter>
 
   
  );
}

export default App;
