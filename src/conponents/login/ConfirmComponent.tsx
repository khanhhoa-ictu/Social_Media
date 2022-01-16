import React from 'react'
import { Image } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import background from './../../assets/image/background.png'
interface Props {
    loginButton: () => void
    id: string
}

const ConfirmComponent = (props: Props) => {
    const { loginButton } = props

    return (
        <StyledDiv>
            <div className="mb-3">
                <p className='text-success d-flex justify-content-center'>Register Success</p>
                <Button onClick={loginButton} className='btn' color='success'>Login</Button>
            </div>
            <Image src={background} alt="" />
            {/* <img  /> */}
        </StyledDiv>
    )
}

export default ConfirmComponent

const StyledDiv = styled.div`
    padding : 5rem;
    display: flex; 
    flex-direction: center  ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
        width : 150px;
    }

`