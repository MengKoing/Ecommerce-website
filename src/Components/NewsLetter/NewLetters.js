import React from 'react'
import './NewLetters.css'
const NewLetters = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>
            Subcrie to our newLetter and stay update
        </p>
        <div>
            <input type= "Email" placeholder='Your Email id'/>
            <button>Subcribe</button>
        </div>
    </div>
  )
}

export default NewLetters