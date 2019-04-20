import React from 'react'

const TextArea = ({label, name, type}) => {

  return (
    <div className={`form-group`}>
    <label htmlFor="exampleInputEmail1">{label}</label><br/>
        <textarea className="form-control" rows="3"  type={type} name={name} placeholder={name }
        required/>
                      
</div>
  )
}
export default TextArea


                                  