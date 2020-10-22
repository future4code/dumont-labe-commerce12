import React from 'react';

import styled from 'styled-components'

const DivProduts = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row wrap;
    width: 80%;
    height: 80vh;
    
`



export default function HomeDiv (props){

    return (
        <DivProduts>
            {props.produtos}
        </DivProduts>

    )
}