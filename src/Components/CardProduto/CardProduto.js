import React from 'react';

import styled from 'styled-components'

const CardDiv = styled.div`

    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    padding: 30px;
    margin: 5px;
    width: 230px;
    height: max-content;
     /* &:hover{
        width: 235px;
        height: 350px;
    }  */
`
const SimpleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
   
`

const ItemImagem = styled.img`
    margin-top: -30px;
    margin-bottom: 5px;
    border-radius: 4px;
    width: 280px;
    height: 250px;
    border: 5px solid white;

`
const AddButton = styled.button`
    background-color: #1C869B;
    color: whitesmoke;
    font-family: sans-serif;
    font-weight: bold;
    width: 90%;
    height: 30px;
    margin: 10px;
    outline: none;
    border: none;
    border-radius: 4px;
    justify-self: flex-end;
    
    cursor: pointer;
    &:hover{
        background-color: tomato;
    }
`

const CardProduto = props =>{

    return (

        <CardDiv>
            <ItemImagem src={props.urlImagem} alt=""/>
            <SimpleDiv>  
            <p>{props.nomeItem}</p>
            <p>Valor: <b>{props.valorItem}</b>R$</p>
            </SimpleDiv>
            <AddButton onClick={props.addToBasket}>Adicionar ao Carrinho</AddButton>
        </CardDiv>
    )
}


export default CardProduto