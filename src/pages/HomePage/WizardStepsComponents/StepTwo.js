import React, { useContext } from "react"
import Input from "../../../components/Input"
import styled from "styled-components"
import { WizzardContext } from "../../../services/Context/WizzardContext"

const Field = styled.div`
margin: 35px 10px;
`
const MINIMUN_LENGTH_PASSWORD = 8
const MAX_LENTH_PASSWORD = 24
const regexAtLeastOneDigitAtLeastOneUppercase = /^(?=.*[A-Z])(?=.*\d)/
const MAX_LENTH_HINT = 255

const StepTwo = (props) => {
  const { getValues, control, watch } = useContext(WizzardContext)
  const passwordHint = watch('passwordHint')

  function getPasswordRules() {
    return {
      required: {
        value: true,
        message: 'Please enter password.'
      },
      minLength: {
        value: MINIMUN_LENGTH_PASSWORD,
        message: 'Password must have at least 8 characters.'
      },
      maxLength: {
        value: MAX_LENTH_PASSWORD,
        message: 'Password has more than 24 characters.'
      },
      pattern: {
        value: regexAtLeastOneDigitAtLeastOneUppercase,
        message: 'Password must have at least one digit and at least one uppercase.'
      }
    }
  }

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
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Input
          control={control}
          rules={getPasswordRules()}
          name={'password'}
          type={'password'}
          placeholder={'Create Master Password'}
          label={<div>
            <p style={{ marginBottom: 0 }}>{'Create Master Password'}</p>
            <small style={{ fontWeight: 100 }}>{'Password(Min 8 - Max 24 characters)(At least 1 number and an uppercase letter)'}</small>
          </div>}
          style={{ marginRight: 100 }}
        />
        <Input
          control={control}
          name={'passwordRepeat'}
          rules={{
            required: {
              value: true,
              message: 'Please repeat your password.'
            },
            validate: (value) => getValues('password') === value || 'Password does not match.'
          }}
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
          rules={{
            maxLength: {
              value: MAX_LENTH_HINT,
              message: 'Hint has more than 255 characters.'
            }
          }}
          name={'passwordHint'}
          placeholder={'Enter your hint'}
          label={'Create your hint to remember your password (optional)'}
        />
        <span style={{ float: 'right', opacity: '0.4' }}>{`${passwordHint ? passwordHint.length : 0}/255`}</span>
      </div>
    </Field>
  </div>
}
export default StepTwo