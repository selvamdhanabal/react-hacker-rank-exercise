import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header'
import Products from './component/Products';
import SlideShow from './component/SlideShow';
import PageNotFound from './component/error/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route exact path="/" element={<Products/>}>Home</Route>
        <Route path='/task1' element={<Products/>}>Task 1</Route>
        <Route path='/task2' element={<SlideShow />}>Task 2</Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
