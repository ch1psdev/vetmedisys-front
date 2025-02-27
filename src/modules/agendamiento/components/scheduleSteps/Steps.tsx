import { useState } from "react"
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const Steps = () => {

    const [ step, setStep ] = useState(1);

  return (
    <>
        {step == 1 && <Step1 setStep={setStep} />}
        {step == 2 && <Step2 setStep={setStep} />}
        {step == 3 && <Step3 setStep={setStep} />}
    </>
  )
}
