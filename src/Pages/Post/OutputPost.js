import React from 'react'
import moment from "moment"
const OutputPost = (props) => {
    const { value:{created_time,full_picture,message,link} , l , r } = props
  return (
    <section className="page-section">
        <div className="container">
            <div className="product-item">
                <div className="product-item-title d-flex">
                    <div className={`bg-faded p-5 d-flex m${l}-auto rounded`}>
                        <h2 className="section-heading mb-0">
                        <span className="section-heading-upper">
                        Gepost sinds: {moment(created_time).calendar()}</span>
                        <span className="section-heading-lower"></span>
                        </h2>
                    </div>
                    </div>
                    <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" 
                        src={`${full_picture}`} alt="t"/>
                    <div className={`product-item-description d-flex m${r}-auto`}>
                    <div className="bg-faded p-5 rounded">
                        <p className="mb-0">{message}</p><br/>
                        <a href={link} target="_blank"rel="noopener noreferrer">leer meer?</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OutputPost
