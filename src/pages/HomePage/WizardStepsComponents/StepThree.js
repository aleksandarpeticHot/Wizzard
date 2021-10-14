import React, { useContext } from 'react'
import { FaCheckCircle, FaWindowClose } from 'react-icons/fa'
import { ActionButtons } from "../../../components/Wizzard/style"
import Divider from "../../../components/Divider"
import styled from "styled-components"
import { WizzardContext } from "../../../services/Context/WizzardContext"

const ActionWrapper = styled.div`
height: 75px;
bottom: 0;
margin: 15px 0px;
position: absolute;
width: calc(100% - 75px);
`

const StepThree = () => {
  const { handleClose, data } = useContext(WizzardContext)

  function renderSucces() {
    return <div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <FaCheckCircle color={'green'} style={{ margin: '0px 10px' }} />
        <div>
          <h2>{'Your password manager is created.'}</h2>
          <small>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh.'}</small>
        </div>
      </div>
      <ActionWrapper>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, float: 'right' }}>
          <ActionButtons type='button'>{'Sign in'}</ActionButtons>
        </div>
      </ActionWrapper>
    </div>
  }

  function renderFailed() {
    return <div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <FaWindowClose color={'red'} style={{ margin: '0px 10px' }} />
        <div>
          <h2>{'There has been a mistake.'}</h2>
          <small>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh.'}</small>
        </div>
      </div>
      <ActionWrapper>
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, float: 'right' }}>
          <ActionButtons onClick={() => handleClose()} type='button'>{'Return to password manager'}</ActionButtons>
        </div>
      </ActionWrapper>
    </div>
  }

  return data.succes ? renderSucces() : renderFailed()
}
export default StepThree