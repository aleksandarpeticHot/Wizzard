import React, { useContext } from "react"
import { WizzardContext } from "../../../services/Context/WizzardContext"
import styled from "styled-components"

const ErrorMessage = styled.p`
color: red;
margin-top: 0;
`
const errorStyle = {
  border: '1px solid red',
  width: 'fit-content'
}

const ImageWrapper = styled.div`
display: flex; 
align-items: baseline; 
margin: 0px 50px;
justify-content: space-evenly;
`
const imageDescription1 = `Save here all your passwords, data or any information
or any information, forget paper notes and unprotected
notes and unprotected applications.`

const imageDescription2 = `Create your master password: only you will be able to
access your secrets with it.`

const StepOne = (props) => {
  const { register, data, getValues, errors } = useContext(WizzardContext)
  const error = Object.keys(errors).length > 0 && errors.dataProtectionPolicy.message

  return <div>
    <h2>{props.header}</h2>
    <div className="content">
      <ImageWrapper>
        <div style={{ width: '30%' }}>
          <img alt={''} src={`${process.env.PUBLIC_URL}/images/Screenshot_1.png`} />
          <p>{imageDescription1}</p>
        </div>
        <div style={{ width: '30%' }}>
          <img alt={''} src={`${process.env.PUBLIC_URL}/images/Screenshot_2.png`} />
          <p>{imageDescription2}</p>
        </div>
      </ImageWrapper>
    </div>
    <h3>{'How it works'}</h3>
    <p>{'First of all, you must create a different password for your electronic belongings. You will not be able to recover your password, so remember it well.'}</p>
    <h3>{'What data you can save'}</h3>
    <p>{`For example, the number of your card, the PIN and PUK of your cell phone, the serial number of one of your devices or any information you need to keep in a safe place.
         your devices or any information that you need to keep in a safe place.`}</p>
    <div style={error ? errorStyle : null}>
      <input
        value={data.dataProtectionPolicy}
        {...register("dataProtectionPolicy", {
          validate: () => getValues('dataProtectionPolicy') ? true : 'Please check to continue.',
        })}
        type="checkbox" />
      <label>{'Check this if you are of legal age and if you agree for us to use the data according to the data protection policy.'}</label>
    </div>
    {error && <ErrorMessage>{errors.dataProtectionPolicy.message}</ErrorMessage>}
  </div >
}
export default StepOne