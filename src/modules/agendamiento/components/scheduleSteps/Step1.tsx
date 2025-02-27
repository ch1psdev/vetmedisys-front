type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step1 = ({setStep}: Props) => {
  return (
    <>
        <div className="grid grid-flow-row gap-y-6">
            <button className="border-2 rounded border-teal w-96 h-12 text-xl font-semibold shadow-md" onClick={()=>setStep(2)}>Particular</button>
            {/* <button className="border-2 rounded border-teal w-96 h-12 text-xl font-semibold shadow-md" onClick={()=>setStep(2)}>Clínica</button> */}
        </div>
    </>
  )
}
