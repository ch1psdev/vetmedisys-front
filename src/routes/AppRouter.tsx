import { Layout } from "@/layout/Layout"
import { Agenda } from "@/modules/agendamiento/views/Agenda"
import { Home } from "@/modules/home/views/Home"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Layout><Home /></Layout>} />
            <Route path='/agenda' element={<Layout><Agenda /></Layout>} />
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    </>
  )
}
