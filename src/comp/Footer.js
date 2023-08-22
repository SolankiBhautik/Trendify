import logo from './img/logo.svg'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='d-flex bg-dark text-light justify-content-around py-5'>
      <div className=''>
        <Link to="/"><img src={logo} alt="logo" width={250}/></Link>
        <p>Your natural candle made for your home and for your wellness.</p>
      </div>
      <div className='d-flex gap-5'>
        <div>
          <p className='text-success'>Discovery</p>
          <p>New season</p>
          <p>Most searched</p>
          <p>Most selled</p>
        </div>
        <div>
          <p className='text-success'><Link to="/about">About</Link></p>
          <p>Help</p>
          <p>Shipping</p>
          <p>Affiliate</p>
        </div>
        <div>
          <p className='text-success'>Info</p>
          <p>Contact us</p>
          <p>Privacy Policies</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer