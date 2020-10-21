import React from 'react';
import ComponenteFiltro from './Components/ComponenteFiltro'

class App extends React.Component {

  //controla a entrada do valor minimo
  onchangeInputMinimo = (event) => {
    console.log (event.target.value)
  }
  //controla a entrada do valor máximo
  onChangeInputMaximo = (event) => {
    console.log (event.target.value)
  }
  //controla a entrada da busca do produto
  onChangeInputProduto = (event) => {
    console.log (event.target.value)
  }

  render() {
  return ( <div className="App">
      <ComponenteFiltro
        onChangeValorMinimo = {this.onchangeInputMinimo}
        onChangeValorMaximo = {this.onChangeInputMaximo}
        onChangeBuscarProduto = {this.onChangeInputProduto}
      />
    
    </div>
  );
  }
}

export default App;
