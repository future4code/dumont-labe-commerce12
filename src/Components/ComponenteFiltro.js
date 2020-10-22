import React from "react"
import styled from "styled-components"


const DivStyled2 = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 97%;
    /* box-shadow: 0px 0px 5px 0px; */
    padding-left: 20px;
    padding-right: 20px;
    background-color: #F5F4F4;
`
const MyInput = styled.input`
    
    outline: none;
    border: 0.1px solid #91BFCA;
    margin: 10px;
    height: 30px;
    border-radius: 5px;
    /* box-shadow: 0px 0px 3px 0px; */
    font-family: sans-serif;
    font-size: 14px;
`
const MyInputNumber = styled(MyInput)`
    width: 60px;
`
const MainTitle = styled.h1`
    color: #91BFCA;
    text-transform: uppercase;

`
const MyLabel = styled.label`
    font-family: sans-serif;
    font-weight: bold;
`

function ComponenteFiltro(props){

    return (
    <DivStyled2>
        <MainTitle>Lab-AstroCommerce</MainTitle>
         <div>  
            <MyInput type="text" onChange={props.onChangeBuscarProduto}
                placeholder='Buscar por nome'
                value={props.valorBusca}
            />
            <MyLabel htmlFor="minimo">Min</MyLabel>
            <MyInputNumber 
                id='minimo'
                type="number" min="0" 
                onChange={props.onChangeValorMinimo}
                value={props.valorMinimo}
            />

            <MyLabel htmlFor="Max">
                Max
            </MyLabel>

            <MyInputNumber 
                id='Max'
                type="number" min="0"
                onChange={props.onChangeValorMaximo}
                value={props.valorMaximo}
                />
        
                
         </div>
    </DivStyled2>
    )

}
export default ComponenteFiltro