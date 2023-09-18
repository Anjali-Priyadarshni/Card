import logo from './logo.svg';
import './App.css';
import {ImgData} from './Cards/FetchimgData';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import { Card } from './Cards/card';
import Star from './Cards/Star';

function App() {
  
  return (
    <div >
      <BrowserRouter>
          <Routes>
            
              <Route path='/img' Component={ImgData}></Route>
              <Route path='/star' Component={Star}></Route> 
           </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
