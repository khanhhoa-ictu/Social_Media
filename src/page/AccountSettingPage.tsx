import React, { FormEvent, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import AccountSettingDetail from '../conponents/account-setting/AccountSettingDetail'
import AccountSettingNavigation from '../conponents/account-setting/AccountSettingNavigation'
import Help from '../conponents/account-setting/Help'
import ChangePassword from '../conponents/account-setting/ChangePassword'
import Navigation from '../conponents/navbar/Navigation'
import { useDispatch } from 'react-redux'
import { updateInfor } from '../api/contact'

function AccountSettingPage() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAdress] = useState('')
    const [gender, setGender] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const submitButton = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateInfor(email,name, adress, phone, gender)
        .then((data)=> {
            console.log(data)
        })
        .catch((err) => console.log(err))
    }

    const validateForm = () => {
        if(!name || !email || !phone || !adress || !gender){
            setIsSubmit(false)
            return
        }
        setIsSubmit(true)
        return
    }

    useEffect(() => {
        validateForm()
        console.log("hieu")
    }, [name,email,phone,adress,gender])

    return (
        <div>
            <Navigation/>
            <div className='container d-flex border rounded mt-5'>
                <AccountSettingNavigation /> 
                <div>
                    <Route exact path="/account/help" component={()=><Help/>} />
                    <Route exact path="/account/changepassword" component={()=><ChangePassword/>} />
                    <Route exact path="/account/setting" 
                        component={() => <AccountSettingDetail
                            name = {name}
                            email = {email}
                            adress = {adress}
                            phone = {phone}
                            gender = {gender}
                            isSubmit = {isSubmit}
                            setName = {setName}
                            setEmail = {setEmail}
                            setPhone = {setPhone}
                            setAdress = {setAdress}
                            setGender = {setGender}
                            submitButton = {submitButton}
                            validateForm = {validateForm}
                        />} 
                    />
                </div>
            </div>
         

        </div>
    )
}

export default AccountSettingPage
