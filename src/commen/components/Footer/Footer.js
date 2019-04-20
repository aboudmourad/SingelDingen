import React from 'react'
// import logos from "../../../commen/config/logo"
import logo1 from "../../../commen/logosImg/sp1.jpeg"
import logo2 from "../../../commen/logosImg/sp2.jpeg"
import logo3 from "../../../commen/logosImg/sp3.jpeg"
import logo4 from "../../../commen/logosImg/sp4.jpeg"
import logo5 from "../../../commen/logosImg/sp5.jpeg"
import logo6 from "../../../commen/logosImg/sp6.jpeg"
import logo7 from "../../../commen/logosImg/sp7.jpeg"
import logo8 from "../../../commen/logosImg/sp8.jpeg"


const Footer = () => {
  const logos = [logo4,logo5,logo6,logo7,logo8,logo1,logo2,logo3]
  const logo = logos.map((value,index)=>{
    return <img className="logo" src={value} key={index} alt={`logo${index}`}/>
  })
  return (
    <footer className="footer text-faded text-center py-5">
        <div className="container">
        {logo}
        <p className="m-0 small">Copyright &copy; 2019 All rights reserved | This Website is made by
        <a href="http://www.codematrix.nl"> Code Matrix Zone</a></p><br/>
        </div>
  </footer>
  )
}

export default Footer
