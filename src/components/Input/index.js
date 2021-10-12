import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa';

const Input = (props) => {
  const { style, label, fluid, ...inputProps } = props
  const [visibleFieldPassword, setVisibleFieldPassword] = useState(false)

  function getTypeInput() {
    if (props.type === 'password') {
      return visibleFieldPassword ? 'text' : props.type
    }
    return props.type || 'text'
  }

  return <div style={{ display: 'grid' }}>
    <label style={{ marginBottom: 5, fontWeight: 700 }}>{props.label}</label>
    <div style={{ position: 'relative', width: fluid ? '100%' : 275, ...props.style }}>
      <input
        type={getTypeInput()}
        style={{ width: 'calc(100% - 12px)', height: 35, border: '2px solid #D7DDE0', borderRadius: '4px', padding: '2px 5px' }}
        {...inputProps}
      />
      {props.type === 'password' && <FaRegEye
        size={22}
        onMouseDown={() => setVisibleFieldPassword(true)}
        onMouseUp={() => setVisibleFieldPassword(false)}
        style={{ position: 'absolute', right: 7, top: 9, cursor: 'pointer' }}
      />
      }
    </div>
  </div>
}
export default Input