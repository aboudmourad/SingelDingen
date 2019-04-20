import React from 'react'

const Input = ({ type, label, name}) => {
  return (
    <div className={`form-group`}>
        <label htmlFor="exampleInputEmail1">{label}</label>
        <br/>
        <input name={name} className="form-control" type={type} placeholder={name} required/>
    </div>
  )
}

export default Input


                