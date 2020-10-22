import React from "react"
import styled from "styled-components"
import {DivStyled, Title} from './Carrinho/Carrinho'

function ComponenteFiltro(props){

    return (
    <DivStyled>
        <Title>Filtros:</Title>
         {/* formulário de busca  */}
        <>
            <label>
                Valor Mínimo
                <input type="number" min="0" 
                onChange={props.onChangeValorMinimo}
                value={props.valorMinimo}/>
            </label>

            <label>
                Valor Máximo
                <input type="number" min="0" 
                onChange={props.onChangeValorMaximo}
                value={props.valorMaximo}
                 />
            </label>

            <label>
                Buscar Produto
                <input type="text" onChange={props.onChangeBuscarProduto}
                value={props.valorBusca}
                />
            </label>
        </>
    </DivStyled>
    )

}
export default ComponenteFiltro