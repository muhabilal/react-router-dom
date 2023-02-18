import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
// import Page404 from './component/Page404';
import User from './component/User';
import '../src/App.css';
function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* params */}
          <Route path='/user/:id' element={<User />} />
          {/* <Route path='/*' element={<Page404 />} /> */}
          {/* for redirect */}
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
