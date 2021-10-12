import React, { useContext } from "react"
import Input from "../../../components/Input"
import styled from "styled-components"
import { WizzardContext } from "../../../services/Context/WizzardContext"

const Field = styled.div`
margin: 35px 10px;
`
const MINIMUN_LENGTH_PASSWORD = 8

const StepTwo = (props) => {
  const { register, data, getValues, errors, control } = useContext(WizzardContext)

  return <div>
    <Field>
      <h2>{props.header}</h2>
    </Field>
    <Field>
      <p>{`First, you must create a different password for your electronic belongings.
    You will not be able to recover your password, so remember it well.`}
      </p>
    </Field>
    <Field>
      <div style={{ display: 'flex' }}>
        <Input
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Please enter password.'
            },
            minLength: {
              value: MINIMUN_LENGTH_PASSWORD,
              message: 'Password must have at least 8 characters.'
            }
          }}
          name={'password'}
          type={'password'}
          placeholder={'Create Master Password'}
          label={'Create your Master Password'}
          style={{ marginRight: 50 }}
        />
        <Input
          control={control}
          name={'passwordRepeat'}
          type={'password'}
          placeholder={'Repeat Master Password'}
          label={'Repeat password'}
        />
      </div>
    </Field>
    <Field>
      <p>{`You can also create a hint to help you remember your master password.`}</p>
    </Field>
    <Field>
      <div>
        <Input
          fluid
          control={control}
          name={'passwordHint'}
          placeholder={'Enter your hint'}
          label={'Create your hint to remember your password (optional)'}
        />
        <span style={{ float: 'right', opacity: '0.4' }}>{'0/60'}</span>
      </div>
    </Field>
  </div>
}
export default StepTwo