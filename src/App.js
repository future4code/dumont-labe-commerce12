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
import Kart from './Img/local_grocery_store-24px.svg'

//imagens de roupas espaciais
import Acesiii from './Img/roupas-espaciais/acesIII.png'
import Acesiv from './Img/roupas-espaciais/acesIV.png'
import Acesi from './Img/roupas-espaciais/ascesI.png'
import Acesii from './Img/roupas-espaciais/ascesII.png'
import Aasaay from './Img/roupas-espaciais/nasaAy.png'
import Nasaz from './Img/roupas-espaciais/nasaZ-2.png'
import UniverseSandbox from './Img/roupas-espaciais/universeSandbox.png'
import X86 from './Img/roupas-espaciais/x86.png'


const MainDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #E2DFDF;
        
`
const ButtonKart = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  outline: none;
  border: 1px solid grey;
  height: 60px;
  width: 60px;
  border-radius: 60px;
  cursor: pointer;

`
const QtCompras = styled.p`
  color: white;
  background-color: red;
  width:20px;
  height :20px;
  border-radius: 20px;
  font-weight: bold;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  
`
const CarrinhoImg =styled.img`
  margin-top: 15px;
    
`

let id = 0
export default class App extends Component {

  state= {
    //filtros
    valorMinimo: 0,
    valorMaximo: Infinity,
    valorBusca: '',
    
    //lista de produtos
    produtos: [
      {
        produtoNome: 'Cebers',
        urlImagem: sateliteCbers,
        valorProduto: 12000,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'Adeos',
        urlImagem: sateliteAdeos ,
        valorProduto: 120,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'HXMT',
        urlImagem: sateliteHXMT,
        valorProduto: 400,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'IRAS',
        urlImagem: sateliteIRAS,
        valorProduto: 300,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'Nimbus',
        urlImagem: sateliteNimbus,
        valorProduto: 235,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'Nimbus-2',
        urlImagem: sateliteNimbus2,
        valorProduto: 56,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'AX86',
        urlImagem: sateliteAntigo,
        valorProduto: 56,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'SES',
        urlImagem: sateliteSES,
        valorProduto: 56,
        categoria: 'Satelite'
      },
      {
        produtoNome: 'AcesIII',
        urlImagem: Acesiii,
        valorProduto: 500,
        categoria: 'Roupa'
      },
      {
        produtoNome: 'AcesI',
        urlImagem: Acesi,
        valorProduto: 800,
        categoria: 'Roupa'
      },
      {
        produtoNome: 'AcesII',
        urlImagem: Acesii,
        valorProduto: 345,
        categoria: 'Roupa'
      },
      {
        produtoNome: 'AcesIV',
        urlImagem: Acesiv,
        valorProduto: 345,
        categoria: 'Roupa'
      },
      {
        produtoNome: 'NasaAy',
        urlImagem: Nasaz,
        valorProduto: 695,
        categoria: 'Roupa'
      },
      {
        produtoNome: 'Universe Sandbox ',
        urlImagem: UniverseSandbox,
        valorProduto: 984,
        categoria: 'Roupa'
      },
      {
        produtoNome: 'X86',
        urlImagem: X86,
        valorProduto: 714,
        categoria: 'Roupa'
      },
      
    ],
    //lista para o carrinho
    carrinho: [],
    totalCompra: 0,
    showKart: false,

    //propriedade para ordenar os produtos
    ordem: '',
    categoria: '',
    totalItemCarrinho: 0
  }
  
  adicionarCarrinho =(nomeProduto) =>{
    //pegando o produto da lista de produto
      const itemToAddArray = this.state.produtos.filter(produto=>{
        return produto.produtoNome === nomeProduto
      })

      //variavel pra checkar se o produto ja existe dentro do array.
      let existe = false
      const itemToAddObjeto= itemToAddArray[0]

      //forEach pra passar pelo array carrinho e um a um checar se ja existe la dentro,
      // se sim ele muda a variavel exixte para true.
      this.state.carrinho.forEach(produto=>{

        if(produto.produtoNome === itemToAddObjeto.produtoNome){
          produto.quantidade++
          const total = this.state.totalCompra + itemToAddObjeto.valorProduto
          this.setState ({
            totalCompra: total,
            totalItemCarrinho: this.state.totalItemCarrinho + 1
          })

          existe = true
          
        }
      })
      if(!existe){
         const objetoItemCarrinho= {...itemToAddObjeto,
        quantidade: 1,
        id: id
      }
      id++
      const total = this.state.totalCompra + itemToAddObjeto.valorProduto

      const novoCarrinho = [...this.state.carrinho, objetoItemCarrinho]
      this.setState ({
        carrinho: novoCarrinho,
        totalCompra: total,
        totalItemCarrinho: this.state.totalItemCarrinho + 1
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
            totalCompra: total,
            totalItemCarrinho: this.state.totalItemCarrinho - 1
          })
          existe = true
        }else{
          const novoCarrinho = this.state.carrinho.filter(produto => {
            return produto.id !== id
            
           })
       
           const total = this.state.totalCompra - itemToRemoveObj.valorProduto
           this.setState ({
             carrinho: novoCarrinho,
             totalCompra: total,
             totalItemCarrinho: this.state.totalItemCarrinho - 1
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
  
  onChangeOrdem = (event)=>{
    this.setState({ordem: event.target.value})
    const visualization = this.state.produtos
    const orderVisualization = visualization.sort((produtoA, produtoB) =>{
      const order = this.state.ordem
  
      if(order === 'descrescente'){
        return produtoA.valorProduto - produtoB.valorProduto
      }else {
        return produtoB.valorProduto - produtoA.valorProduto
      }
    });
  }



  render(){
    
    // array dos produtos renerizados sem filtrar
    let arrayProdutosFiltadros = this.state.produtos.filter((produto)=>{
      const valorNome= this.state.valorBusca === ''? produto.produtoNome: this.state.valorBusca
      const valorMaximo= this.state.valorMaximo === ''? Infinity: this.state.valorMaximo
      const valorCategoria = this.state.categoria === ''? produto.categoria : this.state.categoria
        if(produto.categoria !== valorCategoria||produto.valorProduto <= this.state.valorMinimo || produto.valorProduto >= valorMaximo || produto.produtoNome.toLocaleLowerCase() !==  valorNome.toLocaleLowerCase() ){
          
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
          ordem={this.state.ordem}
          categoria={this.state.categoria}
          onChangeCategoria={(event)=> this.setState({categoria: event.target.value})}
          quantidadeTotalProdutos={arrayProdutosFiltadros.length}
          onChangeOrdem={this.onChangeOrdem}

        
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
      <ButtonKart onClick={()=> this.setState({showKart: !this.state.showKart})}>
        <CarrinhoImg src={Kart} alt=""/>
        <QtCompras>{this.state.totalItemCarrinho}</QtCompras>
      </ButtonKart>
    </div>
    );
  }
}


