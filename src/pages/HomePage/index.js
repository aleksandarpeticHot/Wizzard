import React from 'react'
import Wizzard from '../../components/Wizzard'
import StepOne from './WizardStepsComponents/StepOne'
import StepTwo from './WizardStepsComponents/StepTwo'

const HomePage = (props) => {

    return <Wizzard>
        <StepOne header={'Create your Password Manager'} />
        <StepTwo header={'Create your Password Manager'} />
    </Wizzard>
}
export default HomePage