import React from "react"
import styled from "styled-components"


const DivStyled2 = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 94%; 
    padding-left: 20px;
    padding-right: 60px;
    background-color: #F5F4F4;
    
`
const MyInput = styled.input`
    
    outline: none;
    border: 0.1px solid #91BFCA;
    margin: 10px;
    margin-top: 15px;
    height: 30px;
    padding-left: 10px;
    border-radius: 5px;
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
    margin-top: -3px;
    font-family: sans-serif;
    font-weight: bold;
`
const MySelect = styled.select`
     outline: none;
    border: 0.1px solid #91BFCA;
    margin: 10px;
    margin-top: 15px;
    height: 30px;
    padding-left: 10px;
    border-radius: 5px;
    font-family: sans-serif;
    font-size: 14px;
`
const MySelect2 = styled(MySelect)`
     
    margin-top: 0px;
    
`
const DivColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

function ComponenteFiltro(props){

    return (
    <DivStyled2>
        <MainTitle>Lab-AstroCommerce</MainTitle>
        <p>Quantidade de produtos: {props.quantidadeTotalProdutos}</p>
            <MySelect  value={props.ordem} onChange={props.onChangeOrdem}>
                <option value='crescente'> Crescente</option>
                <option value='descrescente'> Decrescente</option>
            </MySelect>

            <DivColumn>
            
            <MyLabel htmlFor="categoria">Categoria</MyLabel>
            <MySelect2 id='categoria' value={props.categoria} onChange={props.onChangeCategoria}>
                <option value=''> Geral </option>
                <option value='Satelite'> Satelites</option>
                <option value='Roupa'>Roupas-Espaciais</option>
            </MySelect2>

            </DivColumn>
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