import React from "react"

const StepOne = (props) => {

  return <div>
    <h2>{'Create your password Manager'}</h2>
    <div className="content">
      <div style={{ display: 'flex', alignItems: 'baseline', margin: '0px 50px', justifyContent: 'space-evenly' }}>
        <div style={{ width: '30%' }}>
          <img alt={''} src={`${process.env.PUBLIC_URL}/images/Screenshot_1.png`} />
          <p>{`Save here all your passwords, data or any information
            or any information, forget paper notes and unprotected
            notes and unprotected applications.`}</p>
        </div>
        <div style={{ width: '30%' }}>
          <img alt={''} src={`${process.env.PUBLIC_URL}/images/Screenshot_2.png`} />
          <p>{`Create your master password: only you will be able to
             access your secrets with it.`}</p>
        </div>
      </div>
    </div>
    <h3>{'How it works'}</h3>
    <p>{'First of all, you must create a different password for your electronic belongings. You will not be able to recover your password, so remember it well.'}</p>
    <h3>{'What data you can save'}</h3>
    <p>{`For example, the number of your card, the PIN and PUK of your cell phone, the serial number of one of your devices or any information you need to keep in a safe place.
         your devices or any information that you need to keep in a safe place.`}</p>
    <div>
      <input type="checkbox" />
      <label>{'Check this if you are of legal age and if you agree for us to use the data according to the data protection policy.'}</label>
    </div>
  </div >
}
export default StepOne