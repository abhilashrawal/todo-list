import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskList from './pages/TaskList';
import Profile from './pages/Profile';
import CreateTask from './pages/CreateTask';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter >
    <Navigation />
    <Routes>
   <Route path='/' element={<Home />}>  </Route>
   <Route path='/about' element={<About />}>  </Route>
   <Route path='/task-list' aboutelement={<TaskList />}>  </Route>
   <Route path='/profile' element={<Profile />}>  </Route>
   <Route path='/create-task' element={<CreateTask />}>  </Route>


 
    </Routes>
    </BrowserRouter>
   
  )
}

export default App;
