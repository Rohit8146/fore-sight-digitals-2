import React from 'react'

function InputField({type, placeholder, name, inputId}) {
  return (
    <div className='inputfield '>
        <input id={inputId} type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default InputField