import {React, useState} from 'react'
import PaystackPop from '@paystack/inline-js';

const PaystackIntegration = () => {
    const [email,setEmail] = useState("")
    const [amount,setAmount] = useState("")
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const paywithpaystack = (e) => {
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: "pk_test_ca08b53a34efc7486c50f9f77430affcb2621004",
            amount: amount * 100,
            email,
            firstname,
            lastname,
            onSuccess(transaction){
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                setEmail("")
                setAmount("")
            },
            onCancel(){
                alert('You have cancelled the transaction')
            }
        })
    }
  
  return(
     <div className = ' w3-container w3-row '>
        <div className='w3-container w3-blue'>
            <h3 className='w3-center'>Make Payment</h3>
        </div>
        <form id = "paymentForm" className=''>
            <div className='form-group'>
                <label htmlFor = "email"> Email Address</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} id='email-address' />
            </div>
            <div className='form-group'>
                <label htmlFor = "amount"> Amount</label>
                <input type='tel' value={amount} onChange={(e) => setAmount(e.target.value)} id='amount' />
            </div>
            <div className='form-group'>
                <label htmlFor = "first-name"> First Name</label>
                <input type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)} id='first-name' />
            </div>
            <div className='form-group'>
                <label htmlFor = "last-name"> Last Name</label>
                <input type='text' id='last-name' />
            </div>
            <div className='form-submit'>
                <button type='submit' onClick={paywithpaystack} >  Pay </button>
            </div>
        </form>


     </div>
  )
}
export default PaystackIntegration
