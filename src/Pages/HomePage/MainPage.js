import React from 'react'

const MainPage = () => {
  return (
    
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="template/img/kiosk.png" alt="t"/>
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Fresh Coffee</span>
              <span className="section-heading-lower">Worth Drinking</span>
            </h2>
            <p className="mb-3">Singeldingen is een bewonersinitiatief in Rotterdam-West dat
             in de buurt rond het Heemraadspark in zeven jaar tijd uit is gegroeid tot
             een geliefde buitenplek. Rondom een tijdelijke kiosk worden allerlei
              activiteiten voor en door bewoners georganiseerd.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" rel="noopener noreferrer" target="_blank"
              href="https://www.facebook.com/singeldingen/">Kom je singeldingen?</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage
