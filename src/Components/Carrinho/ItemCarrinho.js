import React, { Component } from 'react';
import styled from 'styled-components'
import binImg from '../../Img/delete_outline-24px.svg'

const Item = styled.li`
    border-bottom: 1px solid black;
    padding: 10px;
    display: flex;
    align-items: center;
    width: 90%;


`
const DeletButton = styled.button`
    color: aliceblue;
    font-family: sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: tomato;
    cursor: pointer;   
    &:hover{
        background-color: #f35b40;
    }
`
const AddButton = styled(DeletButton)`
    background-color: #64d364;
    padding: 8px;
    &:hover{
        background-color:  #59be59;
    }
`
const ImgBin = styled.img`
    height: 20px;
    width: 24px;
    
`

export default function ItemCarrinho (props){

    return(
        <>
            <Item>{props.quantidade}x : {props.nomeItem} Valor Unid: {props.valorItem}R$ 
            <DeletButton onClick={props.onDeleteClick}>
                <ImgBin src={binImg} alt=""/>
            </DeletButton>
            <AddButton onClick={props.addItem}>
                + 1
             </AddButton>
            </Item>
        </>
    )
}
