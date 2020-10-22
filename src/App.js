import React, { Component } from 'react';
import Carrinho, { Title } from './Components/Carrinho/Carrinho';
import ItemCarrinho from './Components/Carrinho/ItemCarrinho';
import ComponenteFiltro from './Components/ComponenteFiltro';
import styled from 'styled-components'
import HomeDiv from './Components/HomeDiv/HomeDiv';
import CardProduto from './Components/CardProduto/CardProduto';

//imagens de satelites antigos
import sateliteAdeos from './Img/satelites-antigos/Adeos2.png'
import sateliteCbers from './Img/satelites-antigos/CBERS.png'
import sateliteHXMT from './Img/satelites-antigos/HXMT.png'
import sateliteIRAS from './Img/satelites-antigos/IRAS.png'
import sateliteNimbus2 from './Img/satelites-antigos/Nimbus-2.png'
import sateliteNimbus from './Img/satelites-antigos/Nimbus.png'
import sateliteAntigo from './Img/satelites-antigos/satelite-antigo1.png'
import sateliteSES from './Img/satelites-antigos/SES-14.png'

const MainDiv = styled.div`
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: #E2DFDF;
        
`
const ButtonKart = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  outline: none;
  border: 1px solid grey;
  height: 120px;
  width: 120px;
  border-radius: 120px;
  cursor: pointer;

`

let id = 0
export default class App extends Component {

  state= {
    valorMinimo: 0,
    valorMaximo: Infinity,
    valorBusca: '',
    produtos: [
      {
        produtoNome: 'Cebers',
        urlImagem: sateliteCbers,
        valorProduto: 12000
      },
      {
        produtoNome: 'Adeos',
        urlImagem: sateliteAdeos ,
        valorProduto: 120
      },
      {
        produtoNome: 'HXMT',
        urlImagem: sateliteHXMT,
        valorProduto: 400
      },
      {
        produtoNome: 'IRAS',
        urlImagem: sateliteIRAS,
        valorProduto: 300
      },
      {
        produtoNome: 'Nimbus',
        urlImagem: sateliteNimbus,
        valorProduto: 235
      },
      {
        produtoNome: 'Nimbus-2',
        urlImagem: sateliteNimbus2,
        valorProduto: 56
      },
      {
        produtoNome: 'AX86',
        urlImagem: sateliteAntigo,
        valorProduto: 56
      },
      {
        produtoNome: 'SES',
        urlImagem: sateliteSES,
        valorProduto: 56
      }
    ],
    carrinho: [],
    totalCompra: 0,
    showKart: false
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
      this.state.carrinho.forEach(produto=>{

        if(produto.produtoNome === itemToAddObjeto.produtoNome){
          produto.quantidade++
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
          //subitraindo
  
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
    
    // array dos produtos renerizados sem filtrar
    let arrayProdutosFiltadros = this.state.produtos.filter((produto)=>{
      const valorNome= this.state.valorBusca === ''? produto.produtoNome: this.state.valorBusca
      const valorMaximo= this.state.valorMaximo === ''? Infinity: this.state.valorMaximo
        if(produto.valorProduto <= this.state.valorMinimo || produto.valorProduto >= valorMaximo || produto.produtoNome !==  valorNome ){
          
            return false
          } else{
              return true
            }
        
        
   })

    let arrayProdutos = arrayProdutosFiltadros.map((produto)=>{
     
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
    return (<div>

        <ComponenteFiltro
          onChangeValorMinimo={event => this.setState({valorMinimo: event.target.value})}
          valorMinimo={this.state.valorMinimo}
  
          onChangeValorMaximo={event => this.setState({valorMaximo: event.target.value})}
          valorMaximo={this.state.valorMaximo}
  
          onChangeBuscarProduto={event => this.setState({valorBusca: event.target.value})}
          valorBusca={this.state.valorBusca}
        />
      <MainDiv>
  
        <HomeDiv 
          produtos={arrayProdutos}
        
        />
          <Carrinho
          display={this.state.showKart}
           totalValor={this.state.totalCompra}>
            {arrayCarrinho}
          </Carrinho>
          
      </MainDiv>
      <ButtonKart onClick={()=> this.setState({showKart: !this.state.showKart})}>Carrinho</ButtonKart>
    </div>
    );
  }
}

