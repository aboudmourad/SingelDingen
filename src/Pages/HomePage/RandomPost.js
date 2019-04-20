import React from 'react'
import SD from "../../commen/logosImg/sd.jpg"
const RandomPost = () => {
 

  return (
    <section className="page-section">
        <div className="container">
            <div className="product-item">
                <div className="product-item-title d-flex">
                    <div className="bg-faded p-5 d-flex ml-auto rounded">
                        <h2 className="section-heading mb-0">
                        <span className="section-heading-upper">Meer over Singeldingen</span>
                        <span className="section-heading-lower">Van SD zomar 2018</span>
                        </h2>
                    </div>
                    </div>
                    <iframe width={100+"%"} 
                            height="622" title="video"
                            src="https://www.youtube.com/embed/EnZIXtGK4J8" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen  poster={SD}></iframe>
                    <div className="product-item-description d-flex mr-auto">
                </div>
            </div>
        </div>
    </section>
  )
}

export default RandomPost
