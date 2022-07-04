import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';
import Home from '../home/Home';
import Voting from '../voting/Voting';

import './App.scss';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/voting' element={<Voting />} />
        </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
