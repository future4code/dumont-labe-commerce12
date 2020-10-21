import React from "react"
import styled from "styled-components"
import {DivStyled, Title} from './Carrinho/Carrinho'

function ComponenteFiltro(props){

    return (<DivStyled>
        <Title>Filtros:</Title>
         {/* formulário de busca  */}
        <form>
            <label>
                Valor Mínimo
                <input type="number" min="0" onChange={props.onChangeValorMinimo}/>
            </label>

            <label>
                Valor Máximo
                <input type="number" min="0" onChange={props.onChangeValorMaximo} />
            </label>

            <label>
                Buscar Produto
                <input type="text" onChange={props.onChangeBuscarProduto}/>
            </label>
        </form>
    </DivStyled>
    )

}
export default ComponenteFiltro