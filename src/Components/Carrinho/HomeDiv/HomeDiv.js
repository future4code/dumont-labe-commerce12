import React from 'react';

import styled from 'styled-components'

const DivProduts = styled.div`

    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-flow: row wrap;
    width: 80%;
    height: 70vh;
`



export default function HomeDiv (props){

    return (
        <DivProduts>
            {props.produtos}
        </DivProduts>

    )
}