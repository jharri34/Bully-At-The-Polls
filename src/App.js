import React from 'react';
import model from './model'
import {StoreProvider,createStore } from 'easy-peasy';
import './App.css';
import Election from './components/Elections'
import States from './components/States'

const store=createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
    <div className="App">
      <States/>
      <Election/>
    </div>
    </StoreProvider>

  );
}

export default App;
