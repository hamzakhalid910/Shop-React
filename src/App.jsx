import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Login from './Login';
import './App.css';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
