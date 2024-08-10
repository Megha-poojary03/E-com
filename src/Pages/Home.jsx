import React from 'react'
import logo from './images/earth.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Style.css'

export default function Home() {
  return (
    <div>
      <img src={logo} width="100%" height="100%"/>
      <h1>Best Sellers</h1>
Explore best-selling safe, natural, and 100% toxin-free baby and beauty products from Mamaearth.
   Get amazing deals and start your toxin-free skin, hair, and baby care journey.
  <h1> Mamaearth</h1>

ADD TO CART
NEW LAUNCH


   <div className='Home '>
    <div className='socialmedia'></div>
    <InstagramIcon/>
    <TwitterIcon/>
    <FacebookIcon/>
    <LinkedInIcon/>
    <p> &copy;2021 nmmkklkj.com</p>

    </div>
    </div>
  )
}
