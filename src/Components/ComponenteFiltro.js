import React from "react"
import styled from "styled-components"

function ComponenteFiltro(props){

    return <div>
        <h1>Filtros:</h1>
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
    </div>

}
export default ComponenteFiltro