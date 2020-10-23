import React, { Component } from 'react';
import styled from 'styled-components'
import TotalCarrinho from './TotalCarrinho';

export const DivStyled = styled.div`
    display: ${props => props.display ? 'flex': 'none'};
    background-color: #F5F4F4;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top:70px;
    right: 0px;
    width:400px;
    height: max-content;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
   
    
`
export const ListaStyled = styled.ul`
    list-style: none;
    width: 100%;
`
export const Title = styled.h2`
    margin-left: 20px;

`

class Carrinho  extends Component {
    
    render() { 
        return (
             <DivStyled
             display={this.props.display}
             >
                 <Title>Carrinho:</Title>
                 <ListaStyled>
                     {this.props.children}
                 </ListaStyled>
                 <TotalCarrinho valorTotal={this.props.totalValor}/>
             </DivStyled> 
        );
    }
}
 
export default Carrinho;