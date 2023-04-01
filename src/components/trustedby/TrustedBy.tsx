import React from 'react'
import './Trustedby.scss'

const TrustedBy = () => {
  return (
    <div className='trustedby'>
      <div className="container">
        <span>Trusted by:</span>
        <ul>
          <li><img src="./img/meta.png" alt="Meta" /></li>
          <li><img src="./img/google.png" alt="Google" /></li>
          <li><img src="./img/netflix.png" alt="Netflix" /></li>
          <li><img src="./img/pandg.png" alt="P&G" /></li>
          <li><img src="./img/paypal.png" alt="PayPal" /></li>
        </ul>

      </div>
    </div>
  )
}

export default TrustedBy