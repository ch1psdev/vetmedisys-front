import { Button } from "@/components/ui/button"
import { useState } from "react"
import { IoMdAdd } from "react-icons/io";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step2 = ({setStep}: Props) => {

  const [record, setRecord] = useState<string>()
  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <>
    <div className="flex gap-10 mb-5">
        <div>
          <label htmlFor="record" className="text-sm font-medium leading-none">N° ficha: </label>
          <input 
            type="text" 
            name="record" 
            id="record" 
            className="h-9 w-24 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm" 
            value={record} 
            onChange={(e) => setRecord(e.target.value)} 
          />
        </div>

        <div>
        </div>
          <Button className="bg-teal text-white hover:bg-white hover:text-teal hover:border-teal hover:border-2" onClick={()=>setShowForm(true)}><IoMdAdd /> Nuevo</Button>
    </div>

    {
      showForm &&
        <form className="w-[400px]">
          <div className="grid grid-flow-row mb-5">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm" />
          </div>
          <div className="grid grid-flow-row mb-5">
            <label htmlFor="phone">Teléfono</label>
            <input type="text" name="phone" id="phone" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm" />
          </div>
        
          <div className="grid grid-flow-row mb-5">
            <label htmlFor="petName">Nombre de mascota</label>
            <input type="text" name="petName" id="petName" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm" />
          </div>
          <div className="grid grid-flow-row mb-5">
            <label htmlFor="tutor">Nombre de tutor</label>
            <input type="text" name="tutor" id="tutor" className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm" />
          </div>
        </form>

    }

    <div className="grid gap-4 justify-end grid-flow-col">
      <Button className="border-2 border-teal text-teal bg-white hover:bg-teal hover:text-white" onClick={() => setStep(1)}>Volver</Button>
      <Button className="border-2 border-teal hover:text-teal hover:bg-white bg-teal text-white" onClick={() => setStep(3)}>Continuar</Button>
    </div>
    </>
  )
}
