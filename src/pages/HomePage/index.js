import React from 'react'
import Wizard from '../../components/Wizard'
import StepOne from './WizardStepsComponents/StepOne'
import StepTwo from './WizardStepsComponents/StepTwo'

const HomePage = (props) => {

    return <Wizard>
        <StepOne />
        <StepTwo />
    </Wizard>
}
export default HomePage