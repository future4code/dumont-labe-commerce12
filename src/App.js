import React from 'react';
import './App.css';
import Carrinho from './Components/Carrinho/Carrinho';
import ItemCarrinho from './Components/Carrinho/ItemCarrinho';
import ComponenteFiltro from './Components/ComponenteFiltro';

function App() {
  
  return (
    <div className="App">
      <ComponenteFiltro/>
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
        </Carrinho>
    </div>
  );
}

export default App;