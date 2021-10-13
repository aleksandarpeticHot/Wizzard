import React, { useState } from 'react'
import { useController } from 'react-hook-form';
import { InputWrapper, InputContainer, StyledEyeIcon } from './style'

const Input = (props) => {
  const { field, fieldState } = useController(props)
  const { style, label, fluid, ...inputProps } = props
  const [visibleFieldPassword, setVisibleFieldPassword] = useState(false)

  function getTypeInput() {
    if (props.type === 'password') {
      return visibleFieldPassword ? 'text' : props.type
    }
    return props.type || 'text'
  }

  return <InputWrapper style={{ ...props.style }}>
    <label>{props.label}</label>
    <InputContainer fluidwidth={fluid}>
      <input
        autoComplete={'off'}
        {...inputProps}
        {...field}
        type={getTypeInput()}
      />
      {props.type === 'password' && <StyledEyeIcon
        size={22}
        onMouseDown={() => setVisibleFieldPassword(true)}
        onMouseUp={() => setVisibleFieldPassword(false)}
      />
      }
    </InputContainer>
    {fieldState.error && <span style={{ color: 'red' }}>{fieldState.error.message}</span>}
  </InputWrapper>
}
export default Input