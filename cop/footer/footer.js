import React from 'react'
import s from './footer.module.scss'
function Footer() {
  return (
    <div className={s.Footer}>
<div className={s.div}>
  <h1> Customers </h1>
  <p>Buyer</p>
  <p>Supplier</p>
</div>
<div className={s.div2}>
  <h1>Company</h1>
  <p>About us </p>
  <p>Careers</p>
  <p>Contact us</p>
  
</div>
<div className={s.div3}>
  <h1>Further Infomation</h1>
  <p>Terms &Conditions</p>
  <p>Privacy Policy</p>
</div>

    </div>
  )
}

export default Footer