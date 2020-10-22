import React from 'react';

import styled from 'styled-components'

const CardDiv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0px 0px 5px 0px;
    padding: 0px;
    margin: 10px;
    width: 180px;
    height: 200px;
    &:hover{
        width: 185px;
        height: 205px;
    }
`
const SimpleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
   
`

const ItemImagem = styled.img`
    margin-bottom: 5px;
    border-radius: 4px 0px;
    width: 100%;
    height: 50%;

`
const AddButton = styled.button`
    background-color: black;
    color: whitesmoke;
    font-family: sans-serif;
    font-weight: bold;
    width: 90%;
    height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
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
            <AddButton onClick={props.AddToBasket}>Adicionar ao Carrinho</AddButton>
        </CardDiv>
    )
}


export default CardProduto