import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Layout from './components/Layout/layout';
import DodajElement from "./pages/DodajElement";


const App = () => {


  return (
   
    
      <Layout>
        <Routes> 
        <Route path='/welcome' element={<HomePage/>}/>
        <Route path='/dodaj-element' element ={<DodajElement/>}/>
        
      </Routes>
      </Layout>

   
  );
};

export default App;
