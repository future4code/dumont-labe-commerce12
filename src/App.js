import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carrinho from './Components/Carrinho/Carrinho';
import ItemCarrinho from './Components/Carrinho/ItemCarrinho';

function App() {
  
  return (
    <div className="App">
        <Carrinho totalValor='500'>
          <ItemCarrinho
            nomeItem='Capa'
            quantidade='14'
            valorItem='200'
            onDeleteClick=''
            
          />
          <ItemCarrinho
            nomeItem='Capa'
            quantidade='14'
            valorItem='200'
            onDeleteClick=''
          />
          <ItemCarrinho
            nomeItem='Capa'
            quantidade='14'
            valorItem='200'
            onDeleteClick=''
          />
          <ItemCarrinho
            nomeItem='Capa'
            quantidade='14'
            valorItem='200'
            onDeleteClick=''
          />
        </Carrinho>
    </div>
  );
}

export default App;
