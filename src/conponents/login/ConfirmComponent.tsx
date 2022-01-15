import React from 'react'
import { Button } from 'reactstrap';
import styled from 'styled-components';

interface Props {
    loginButton : () => void
    id : string
}

const  ConfirmComponent = (props : Props) => {
    const {loginButton} = props
    
    return (
        <StyledDiv>
            <p className='text-success'>Register Success</p>
            <Button onClick={loginButton} className='btn' color='success'>Login</Button>
        </StyledDiv>
    )
}

export default ConfirmComponent

const StyledDiv = styled.div`
    padding : 5rem;
    display: flex; 
    flex-direction: column  ;
    justify-content: center;
    .btn {
        width : 150px;
    }

`