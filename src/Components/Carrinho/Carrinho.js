import React, { Component } from 'react';
import styled from 'styled-components'
import TotalCarrinho from './TotalCarrinho';

export const DivStyled = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid black;
    width: 25%;
    max-width: 400px;
    height: 70vh;
    margin: 30px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px;
`
export const ListaStyled = styled.ul`
    list-style: none;
    padding: 20px;
`
export const Title = styled.h2`
    margin-left: 20px;

`

class Carrinho  extends Component {
    
    render() { 
        return (
             <DivStyled>
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