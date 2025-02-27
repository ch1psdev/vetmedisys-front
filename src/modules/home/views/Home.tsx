import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { GrSchedule } from "react-icons/gr";

export const Home = () => {

    const agendas = [
        {
            paciente: 'Pancha',
            horario: '12/04/2025 - 08:00'
        },
        {
            paciente: 'Harry Potter',
            horario: '12/04/2025 - 08:00'
        },
        {
            paciente: 'Wilfredo',
            horario: '12/04/2025 - 08:00'
        }
    ]

  return (
    <>
        <h1 className="text-4xl font-bold mb-10">¡BIENVENIDO/A!</h1>

        <Card className="w-[350px]">
            <CardHeader>
                <GrSchedule size={40} className="m-auto" />
                <h1 className="text-2xl font-bold text-center">Próximas agendas</h1>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    {
                        agendas.map((data) => (
                            <div className="border-b-2">
                                <p className="font-semibold">{data.paciente}</p>
                                <label className="mx-2">{data.horario}</label>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Ver más</Button>
            </CardFooter>
        </Card>
    </>
  )
}
