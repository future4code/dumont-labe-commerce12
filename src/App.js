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

let id = 0
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
    ],
    carrinho: [],
    totalCompra: 0
  }
  
  adicionarCarrinho =(nomeProduto) =>{
    //pegando o produto da lista de produto
      const itemToAddArray = this.state.produtos.filter(produto=>{
        return produto.produtoNome === nomeProduto
      })

      //variavel pra checkar se o produto ja existe dentro do array.
      let exite = false
      const itemToAddObjeto= itemToAddArray[0]

      //forEach pra passar pelo array carrinho e um a um checar se ja existe la dentro,
      // se sim ele muda a variavel exixte para true.
      this.state.carrinho.forEach(item=>{

        if(item.produtoNome === itemToAddObjeto.produtoNome){
          item.quantidade++
          const total = this.state.totalCompra + itemToAddObjeto.valorProduto
          this.setState ({
            totalCompra: total
          })

          exite = true
          
        }
      })
      if(!exite){
         const objetoItemCarrinho= {...itemToAddObjeto,
        quantidade: 1,
        id: id
      }
      id++
      const total = this.state.totalCompra + itemToAddObjeto.valorProduto

      const novoCarrinho = [...this.state.carrinho, objetoItemCarrinho]
      this.setState ({
        carrinho: novoCarrinho,
        totalCompra: total
      })
      }
     
     
  }

  onRemoveCarrinho = (id)=>{
    const itemToRemove = this.state.carrinho.filter(produto=>{
      return produto.id === id
    })
    const itemToRemoveObj= itemToRemove[0]
    let existe = false
    this.state.carrinho.forEach(item=>{

      if(item.id === itemToRemoveObj.id){
        if(item.quantidade > 1){

          item.quantidade --
  
          const total = this.state.totalCompra - itemToRemoveObj.valorProduto
  
          this.setState ({
            totalCompra: total
          })
          existe = true
        }else{
          const novoCarrinho = this.state.carrinho.filter(produto => {
            return produto.id !== id
            
           })
       
           const total = this.state.totalCompra - itemToRemoveObj.valorProduto
           this.setState ({
             carrinho: novoCarrinho,
             totalCompra: total
           }) 
           existe = true
         }
        }
      }
    )
    const novoCarrinho = this.state.carrinho.filter(produto => {
     return produto.id !== id
     
    })
    if(!existe){
      const total = this.state.totalCompra - itemToRemoveObj.valorProduto
      this.setState ({
        carrinho: novoCarrinho,
        totalCompra: total
      })
    
    }
  }


  render(){
    console.log(this.state.carrinho)
    // array dos produtos renerizados sem filtrar
    let arrayProdutos = this.state.produtos.map((produto)=>{
     
      return <CardProduto
      key={produto.produtoNome}
      urlImagem={produto.urlImagem}
      nomeItem={produto.produtoNome}
      valorItem={produto.valorProduto}
      addToBasket={()=> this.adicionarCarrinho(produto.produtoNome)}
      />
    })
    let arrayCarrinho =this.state.carrinho.map((produto) =>{
      return (
        
        <ItemCarrinho
          key={produto.id}
          id={produto.id}
          quantidade={produto.quantidade}
          nomeItem={produto.produtoNome}
          valorItem={produto.valorProduto}
          onDeleteClick={() => this.onRemoveCarrinho(produto.id)}
        />
        
      )
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
          <Carrinho totalValor={this.state.totalCompra}>
            {arrayCarrinho}
          </Carrinho>
      </MainDiv>
    );
  }
}

