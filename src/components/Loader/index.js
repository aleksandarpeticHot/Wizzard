import React from 'react'
import { StyledLoader, StyledWrapper } from './style'

const Loader = (props) => {

  return (
    <StyledWrapper style={{ display: props.isBusy ? 'block' : 'none' }}>
      <StyledLoader />
    </StyledWrapper>
  )
}
export default Loader