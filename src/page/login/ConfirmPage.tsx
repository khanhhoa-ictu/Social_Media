import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { verifyUser } from '../../api/user.api'
import ConfirmComponent from '../../conponents/login/ConfirmComponent'

function ConfirmPage() {
    const history = useHistory()
    const params : {id : string} = useParams()
    const loginButton = () => {
        history.push('/login')
    }
    
    useEffect(() => {
        verifyUser(params.id)
        .then((data)=> {
            console.log('data1', data)
            
        })
        .catch((err) => console.log('err1',err))
    }, [])

    return (
        <div>
            <ConfirmComponent 
                loginButton = {loginButton}
                id = {params.id}
            />
        </div>
    )
}

export default ConfirmPage
