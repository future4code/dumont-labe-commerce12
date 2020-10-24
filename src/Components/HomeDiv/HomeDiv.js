import React from 'react';

import styled from 'styled-components'

//Div main que recebe os cards de produtos
const DivProduts = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    width: 100vw;
    height: max-content;
    
`

export default function HomeDiv (props){

    return (
        <DivProduts>
            {props.produtos}
        </DivProduts>

    )
}