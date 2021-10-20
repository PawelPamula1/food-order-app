import React from 'react';
import Header from './Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Meals/Cart/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
