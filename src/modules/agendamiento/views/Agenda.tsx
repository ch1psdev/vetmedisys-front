import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Steps } from "../components/scheduleSteps/Steps";

const formSchema = z.object({
  petName: z.string(),
  tutorName: z.string(),
  email: z.string(),
  phone: z.string(),
  record: z.string(),
  fuente: z.string()
})

export const Agenda = () => {

    const [date, setDate] = useState<Date | undefined>(new Date()); 
    
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        petName: "",
        tutorName: "",
        email: "",
        phone: "",
        record: "",
        fuente: "clinica"
      }
    })

    function onSubmit(values: z.infer<typeof formSchema>){
      console.log(values)
    }
    

  return (
    <>
        <h1 className="text-4xl font-bold mb-10">REVISA TU AGENDA</h1>

        <section>
          <h2 className="text-xl font-bold mb-5">Agenda una hora:</h2>

          <div className="h-[300px]">
            <Steps />
          </div>
          <div>
            <button></button>
          </div>
        </section>

        
    </>
  )
}
