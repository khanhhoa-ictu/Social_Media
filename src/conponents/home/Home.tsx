import React from 'react'
import Navigation from '../navbar/Navigation'

interface Props {
    logout : () => void
}

function Home(props : Props) {
    const {logout} = props

    return (
        <div>
            <Navigation logout = {logout}/>
        </div>
    )
}

export default Home
