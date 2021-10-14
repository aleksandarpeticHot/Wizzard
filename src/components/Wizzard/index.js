import React, { Fragment, useState } from 'react'
import Navbar from '../Navbar'
import { WizzardContext } from '../../services/Context/WizzardContext'
import { useForm } from 'react-hook-form'
import { Circle, ConnectCircleLine, WizzardWrapper } from './style'
import Loader from '../Loader'

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
    mode: 'onSubmit',
    defaultValues: props.defaultValues
  })
  const [step, setStep] = useState(0)
  const [data, setData] = useState({})
  const [isBusy, setIsBusy] = useState(false)

  async function onSubmit(dataSubmited) {
    if (props.children[step].props.handleNextAction) {
      try {
        setIsBusy(true)
        const response = await props.children[step].props.handleNextAction()
        dataSubmited.succes = response.succes
        setData({ ...data, ...dataSubmited })
      } catch (error) {
        //catch errors
      }
      setIsBusy(false)
    }
    else {
      setData({ ...data, ...dataSubmited })
    }
    setStep(step + 1)
  }

  function handleClose() {
    reset({})
    setData({})
    setStep(0)
  }

  function getNavbar() {
    return <Navbar>
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
  }

  return <WizzardContext.Provider value={{ data, register, getValues, errors, control, watch, setStep, handleClose }}>
    <WizzardWrapper as='form' onSubmit={handleSubmit(onSubmit)}>
      {getNavbar()}
      <div className="content">
        <Loader isBusy={isBusy} />
        {props.children[step]}
      </div>
    </WizzardWrapper>
  </WizzardContext.Provider>
}
export default Wizzard