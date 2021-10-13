import React, { Fragment, useState } from 'react'
import Navbar from '../Navbar'
import Divider from '../Divider'
import { WizzardContext } from '../../services/Context/WizzardContext'
import { useForm } from 'react-hook-form'
import { Circle, ConnectCircleLine, WizzardWrapper, ActionButtons } from './style'

const Wizzard = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    control,
    watch,
    reset
  } = useForm({
    mode: 'onSubmit'
  })
  const [step, setStep] = useState(0)
  const [data, setData] = useState({})

  function onSubmit(dataSubmited) {
    setData({ ...data, ...dataSubmited })
    setStep(step + 1)
  }

  function handleClose() {
    reset({})
    setData({})
    setStep(0)
  }

  return <WizzardContext.Provider value={{ data, register, getValues, errors, control, watch }}>
    <WizzardWrapper as='form' onSubmit={handleSubmit(onSubmit)}>
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
          <ActionButtons onClick={() => handleClose()} type='button'>{'Close'}</ActionButtons>
          <ActionButtons type='submit'>{'Next'}</ActionButtons>
        </div>
      </div>
    </WizzardWrapper>
  </WizzardContext.Provider>
}
export default Wizzard