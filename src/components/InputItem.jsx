import React, { useState } from 'react'

export default function InputItem() {
const [value, setValue] = useState('Text for Input')

return (
  <>
  <div className='inputText'>
  <h3>{value}</h3>
  <input 
  type="text" 
  value={value}
  onChange={event => setValue(event.target.value)}
   /> 
   </div>
  </> 
)
}
