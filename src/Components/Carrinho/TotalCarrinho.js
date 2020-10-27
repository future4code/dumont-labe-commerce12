import React from 'react';
import styled from 'styled-components'


//
const TotalDvi = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    justify-self: flex-end;
    align-self: flex-end;
    width: 30%;
    margin-top: 10px;
    margin-right: 30px;
`

export default function TotalCarrinho (props){

    return (
        <TotalDvi>
           <b>Total:</b> <p>{props.valorTotal}</p>
        </TotalDvi>
    )
}