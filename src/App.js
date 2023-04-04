import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import TaskList from './pages/TaskList';
import Profile from './pages/Profile';
import CreateTask from './pages/CreateTask';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import PageNotFound from './pages/PageNotFound';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter >
    <Navigation />
    <Routes>
    <Route path="/" element={<Navigate to="/login"/>}></Route>
   <Route path='/' element={<Home />}>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}>
    </Route> 
    
    
    </Route>

   <Route path='/about' element={<About />}>  </Route>
   <Route path='/task-list' aboutelement={<TaskList />}>  </Route>
   <Route path='/profile' element={<Profile />}>  </Route>
   <Route path='/create-task' element={<CreateTask />}>  </Route>
   <Route path='*' element={<PageNotFound />}> </Route>


 
    </Routes>
    </BrowserRouter>
   
  )
}

export default App;
