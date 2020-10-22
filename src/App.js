import React, { Component } from 'react';
import Carrinho from './Components/Carrinho/Carrinho';
import ItemCarrinho from './Components/Carrinho/ItemCarrinho';
import ComponenteFiltro from './Components/ComponenteFiltro';
import binImg from './Img/delete_outline-24px.svg'

import styled from 'styled-components'
import HomeDiv from './Components/Carrinho/HomeDiv/HomeDiv';
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
        produtoNome: 'capa',
        urlImagem: 'https://picsum.photos/200/300',
        valorProduto: 40
      },
      {
        produtoNome: 'capa',
        urlImagem: 'https://picsum.photos/200/300',
        valorProduto: 40
      },
      {
        produtoNome: 'capa',
        urlImagem: 'https://picsum.photos/200/300',
        valorProduto: 40
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

