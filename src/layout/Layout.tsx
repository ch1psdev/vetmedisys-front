import { AppSidebar } from "@/components/AppSidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useState } from "react"
import { CiLogout } from "react-icons/ci"

export const Layout = ({children}: {children: React.ReactNode}) => {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className="bg-tealGreen w-full py-3 px-7 grid grid-flow-col justify-between text-white z-20 fixed">
            <div></div>
            <div>
                <a onClick={() => setShowMenu(!showMenu)}>
                    <div className="grid grid-flow-col justify-end gap-3 items-center w-max cursor-pointer">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>    
                        <p>Nombre usuario</p>
                    </div>
                </a>
            </div>
        </div>
    <div>

        <div className={`absolute mt-[64px] right-0 p-4 w-[200px] grid justify-center justify-items-center justify-self-end shadow-md rounded-lg gap-4 transition-transform duration-500 ease-in-out transform ${showMenu ? 'translate-y-0 opacity-100' : '-translate-y-[208px] opacity-0 pointer-events-none'}`}>
            <img src="https://github.com/shadcn.png" alt="profile pic" className="w-20 h-20" />
            <h1 className="font-medium text-lg">Nombre usuario</h1>
            <Button variant='link'>
                {/*<Link href="/login">Login</Link>*/}
                <CiLogout /> Cerrar sesión
            </Button>    
        </div>

        <div className="flex min-h-screen">
        <SidebarProvider defaultOpen>
            <AppSidebar />
            <main className="flex-1 mt-[64px] px-10 py-5 max-w-[1200px]">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>

        </div>
    </div> 
    </>
  )
}
