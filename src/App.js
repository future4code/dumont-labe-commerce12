import React, { Component } from 'react';
import Carrinho from './Components/Carrinho/Carrinho';
import ItemCarrinho from './Components/Carrinho/ItemCarrinho';
import ComponenteFiltro from './Components/ComponenteFiltro';

import styled from 'styled-components'
import HomeDiv from './Components/HomeDiv/HomeDiv';
import CardProduto from './Components/CardProduto/CardProduto';


const MainDiv = styled.div`
        display: flex;
        align-items: center;
        padding: 10px;
        
`

export default class App extends Component {

  state= {
    valorMinimo: 0,
    valorMaximo: Infinity,
    valorBusca: '',
    produtos: [
      {
        produtoNome: 'item 5',
        urlImagem: 'https://picsum.photos/200/300',
        valorProduto: 40
      },
      {
        produtoNome: 'item 4',
        urlImagem: 'https://picsum.photos/200/301',
        valorProduto: 120
      },
      {
        produtoNome: 'item 3',
        urlImagem: 'https://picsum.photos/200/302',
        valorProduto: 400
      }
    ]
  }


  render(){
    // array dos produtos renerizados sem filtrar
    let arrayProdutos = this.state.produtos.map(produto=>{
     
      return <CardProduto key={produto.produtoNome}
      urlImagem={produto.urlImagem}
      nomeItem={produto.produtoNome}
      valorItem={produto.valorProduto}
      />
    })

    return (
      <MainDiv>
        <ComponenteFiltro
          onChangeValorMinimo={event => this.setState({valorMinimo: event.target.value})}
          valorMinimo={this.state.valorMinimo}
  
          onChangeValorMaximo={event => this.setState({valorMaximo: event.target.value})}
          valorMaximo={this.state.valorMaximo}
  
          onChangeBuscarProduto={event => this.setState({valorBusca: event.target.value})}
          valorBusca={this.state.valorBusca}
        />
  
        <HomeDiv 
          produtos={arrayProdutos}
        
        />
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
      </MainDiv>
    );
  }
}

