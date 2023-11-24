import React from 'react';
import './App.css';
import Layout from './screen/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteManager from './screen/RouteManager';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <Layout />
          <Box component="main" style={{ padding: '0 25px 25px 25px', marginTop: '100px', width: '100%' }}>
            <Routes>
              {
                RouteManager.RouteCollection.map((route, index) => {
                  return (
                    <Route key={`route-${index}`} path={route.url} element={route.element}></Route>
                  )
                })
              }
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
