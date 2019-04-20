import React from 'react'
import InputContact from "../../../commen/config/InputField"
import Input from '../../../commen/InputForm/Input';
import TextArea from '../../../commen/InputForm/TextArea';


const Contact = () => {
  return (
    <section className="page-section about-heading">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-10 mx-auto">
                    <div className="bg-faded rounded p-5">
                        <h2 className="section-heading mb-4">
                            <span className="section-heading-upper"> Wil je iets vieren bij 
                            SingelDingen ? </span>
                            <span className="section-heading-lower">Neem contact
                            met ons op...</span>
                        </h2>
                        <form action="https://formspree.io/aboudmourad@hotmail.com" method="post">
                         
                            <div className="form-group">

                                {InputContact.map((value,index)=>
                                    <Input key={index} label={value.label} 
                                            name={value.name} type={value.type}/>
                                            )}

                                <TextArea label="Berichten" name="Message" type="text"/>
                            </div>
                         
                        </form>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  )

}


export default Contact
