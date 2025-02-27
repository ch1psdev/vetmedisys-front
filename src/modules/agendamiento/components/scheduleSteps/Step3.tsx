import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";

type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step3 = ({setStep}:Props) => {

  const [date, setDate] = useState<Date | undefined>(new Date()); 

  return (
    <>
      <div className="grid grid-cols-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border max-w-fit"
        />

        <div>  
          <div>horarios</div>
            <div>
              <div>
                <b>08:00 hrs.</b>  
              </div>    
            </div>
        </div>
      </div>
    </>
  )
}
