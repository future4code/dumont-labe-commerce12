import React from 'react';
import styled from 'styled-components'



const TotalDvi = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    justify-self: flex-end;
    align-self: flex-end;
    margin-top: 80%;
    margin-right: 20px;
`

export default function TotalCarrinho (props){

    return (
        <TotalDvi>
           <b>Total:</b> <p>{props.valorTotal}</p>
        </TotalDvi>
    )
}