import React, { Component } from 'react'
import Time from "../../../commen/config/Time"
import Address from './Address';
import $ from "jquery"
import moment from "moment"
export default class OpenTime extends Component {
    componentDidMount =()=>{
        $('.list-hours li').eq(new Date().getDay()).addClass('today');
    }
    
  render() {
   let open, month = ["May", "June", "July"]
   month.map((value)=>{
     return moment().format('MMMM') !== value? open ="Wij zijn in winterslaap, Tot Mei":open ="Wij Zijn Er Weer!" 
    })
      const weekTime = Time.map((value, index)=>{
          return <li className="list-unstyled-item list-hours-item d-flex" key={index}>
                    {value.day}
                     <span className="ml-auto">{value.time}</span>
                </li>
      })
    return (
        <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">Singeldingen Een Goede Buur!</span>
                  <span className="section-heading-lower">{open}</span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                    {weekTime}
                </ul>
               <Address/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
