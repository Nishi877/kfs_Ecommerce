import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { IoLogoInstagram } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
  
        <MDBFooter bgColor='light' className='text-center bottom-0 w-full text-lg-start text-muted'>
<section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                <img src="src\assets\Untitled-1.png" class="f_logo"></img>
                <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Kuber Tower, Ajronda, Sec- 20B Faridabad
              </p>
              <p>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />
              info@kfsfitness.com
            </p>
            <p>
            <MDBIcon color='secondary' icon='phone' className='me-3' />+91 9650 104 416
          </p>
          </h6>
          <p className='footer_logo'>
          <i class="fas fa-cloud"></i>
<i class="fas fa-heart"><IoLogoInstagram/></i>
<i class="fas fa-car"><CiFacebook/></i>
<i class="fas fa-file"><CiYoutube /></i>
<i class="fas fa-file"><CiMail/></i>
</p>
                 </MDBCol>
    
                <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'><u>Shop</u></h6>
                  <p>
                    <a href='#' className='text-reset'>
                    Home
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                    About Us

                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                    Products
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                    Contact Us
                    </a>
                  </p>
                  <p>
                  <a href='#!' className='text-reset'>
                  Blogs
                  </a>
                </p>
                </MDBCol>
    
                <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'><u>Help & Support</u></h6>
                  <p>
                    <a href='#!' className='text-reset' color='black'>
                    Return & Refund Policy
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                    Term & Condition
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                    Payment Shipping Policy
                    </a>
                  </p>
                  <p>
                  <a href='#!' className='text-reset'>
                  Enquiry
                  </a>
                </p>
                  <p>
                    <a href='#!' className='text-reset'>
                    Privacy Policy  Enquiry
                    </a>
                  </p>
                </MDBCol>
                
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
  

 
    </div>
  )
}

export default Footer;
