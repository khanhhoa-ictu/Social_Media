import React from 'react'
import styled from 'styled-components';

const  FooterComponent = () => {
    return (
        <StyledDiv>
            © 2022 Margatsni FROM Group 2
        </StyledDiv>
    )
}

export default FooterComponent

const StyledDiv = styled.div`
    padding : 5rem;
    display: flex; 
    justify-content: center;
`