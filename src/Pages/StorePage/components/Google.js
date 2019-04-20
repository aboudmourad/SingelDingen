import React from 'react'

const Google = () => {
  return (
    
    <div className="mapouter">
        <h1 className="site-heading text-center text-white d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3">Voor en door bewoners van Delfshaven</span>
            <span className="site-heading-lower">Locatie</span>
        </h1>
   
        <div className="gmap_canvas">
            <iframe width="884" height="543" id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Heemraadsingel%20207%2C%20heemraadspark%20(1.05%20mi)%20Rotterdam%2C%20Netherlands&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                title="google" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
            </iframe>
            <a href="https://www.pureblack.de/webdesign/" >{""}</a>
        </div>
    </div>
  )
}

export default Google
