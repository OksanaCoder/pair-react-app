import React, { Component } from 'react';
import { footer } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPrint, FaPhone , FaHome, FaEnvelope} from 'react-icons/fa';

 const Footer = () => {
    return (
     
<footer>
    <div className='wrapper-fiolet'>
        <div className='container'>
           <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
               <h6 className="mb-0">Get connected with us on social networks!</h6>
            </div>

        <div className="col-md-6 col-lg-7 text-center text-md-right">


            <a className="fb-ic">
            <FaFacebook />
            </a>
            
            <a className="tw-ic ml-2 mr-2">
                <FaTwitter/>
            </a>

            <a className="ins-ic">
               <FaInstagram />
            </a>

        </div>

        </div>

    </div>
 </div>
 <div className="wrapper-dark-blue">
 <div className='container'>
    <div className="row p-5">


        <div className="col-md-12 col-lg-6 col-sm-12 mx-auto text-left">

     
        <h6 className="text-uppercase font-weight-bold">Company name</h6>
         <hr className="deep-purple-left accent-2 mb-4 mt-0 d-inline-block mx-auto"/> 
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur
            adipisicing elit.</p>

      </div>
      <div className="col-md-12 col-lg-6 col-sm-12 mx-auto text-right">

       
        <h6 className="text-uppercase font-weight-bold">Contact</h6>
        <hr className="deep-purple-right accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p>
          <FaHome className='mr-2'/>New York, NY 10012, US</p>
        <p>
          <FaEnvelope className='mr-2'/>info@example.com</p>
        <p>
         <FaPhone className='mr-2'/> + 01 234 567 88</p>
        <p>
         <FaPrint className='mr-2'/> + 01 234 567 89</p>

      </div>
      </div>
      
      
  </div>
  </div>
  <div className='wrapper-footer'>
    <div className="container">
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="#" className='text-white'> Wise up</a>
        </div>
    </div>
  </div>
</footer>
    )
}

export default Footer;