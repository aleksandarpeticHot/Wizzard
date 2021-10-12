import React, { Fragment, useState } from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components';
import Divider from '../Divider';
import { WizardContext } from '../../services/Context/WizardContext';

const Circle = styled.div`
height: ${props => props.active ? '40px' : '30px'};
width: ${props => props.active ? '40px' : '30px'};
opacity: ${props => props.active ? '1' : '0.4'};
background-color: #062A45;
border-radius: 50%;
display: inline-block;
color: white;
text-align: center;
 p {
  margin-top: ${props => props.active ? '10px' : '6px'}; 
 }
`
const ConnectCircleLine = styled.div`
height: 4px;
background-color: #062A45;
opacity: 0.4;
width: 50px;
`
const WizzardWrapper = styled.div`
>.content {
  margin: 30px;
}
>.actions {
  height: 75px;
  bottom: 0;
  margin: 15px;
  position: absolute;
  width: calc(100% - 30px)
}
`
const ActionButtons = styled.button`
width: 75px;
height: 35px;
border: 0;
background: white;
&:hover {
  background: #062A45;
  color: white;
  border-radius: 3px;
}
margin: 0px 15px;
cursor: pointer;
`

const Wizzard = (props) => {

  const [step, setStep] = useState(1)
  const [data, setData] = useState({})

  return <WizardContext.Provider value={{ data, setData }}>
    <WizzardWrapper>
      <Navbar>
        <div style={{ margin: 'auto', display: 'flex', alignItems: 'center' }}>
          {props.children.map((_, index) => {
            return <Fragment key={index}>
              <Circle active={step === index}>
                <p>{index + 1}</p>
              </Circle>
              {index + 1 < props.children.length && <ConnectCircleLine />}
            </Fragment>
          })}
        </div>
      </Navbar>
      <div className="content">
        {props.children[step]}
      </div>
      <div className="actions">
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
          <ActionButtons onClick={() => setStep(0)}>{'Close'}</ActionButtons>
          <ActionButtons
            disabled={step >= props.children.length - 1}
            onClick={() => setStep(step + 1)}>{'Next'}</ActionButtons>
        </div>
      </div>
    </WizzardWrapper>
  </WizardContext.Provider>
}
export default Wizzard