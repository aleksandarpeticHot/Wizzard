import React from 'react'
import Wizzard from '../../components/Wizzard'
import StepOne from './WizardStepsComponents/StepOne'
import StepTwo from './WizardStepsComponents/StepTwo'

const HomePage = (props) => {

    return <Wizzard>
        <StepOne />
        <StepTwo />
    </Wizzard>
}
export default HomePage