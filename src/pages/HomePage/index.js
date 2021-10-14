import React from 'react'
import Wizzard from '../../components/Wizzard'
import StepOne from './WizardStepsComponents/StepOne'
import StepTwo from './WizardStepsComponents/StepTwo'
import StepThree from './WizardStepsComponents/StepThree'
import { updatePassword } from '../../services/api/createNewPassword'

const HomePage = () => {

  return <Wizzard>
    <StepOne header={'Create your Password Manager'} />
    <StepTwo handleNextAction={updatePassword} header={'Create your Password Manager'} />
    <StepThree />
  </Wizzard>
}
export default HomePage