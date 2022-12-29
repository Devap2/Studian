//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/homepage';
import Contact from './components/contact';
import SignIn from './components/SignIn';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import AboutUs from './components/about-us';
import Todo from './components/todo';

const App = () => {
	return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </div>
    </>
	);
};

export default App;