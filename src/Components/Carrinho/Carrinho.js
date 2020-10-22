import React, { Component } from 'react';
import styled from 'styled-components'
import TotalCarrinho from './TotalCarrinho';

export const DivStyled = styled.div`
    display: ${props => props.display ? 'flex': 'none'};
    background-color: white;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid black;
    width:400px;
    max-width: 400px;
    height: max-content;
    align-self: flex-start;
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