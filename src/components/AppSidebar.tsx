import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { TfiAgenda } from "react-icons/tfi";
import { TiDocumentText } from "react-icons/ti";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const AppSidebar = () => {

    const items = [
      {
        title: "Home",
        url: "/home",
        icon: <IoHomeOutline />,
      },
        {
          title: "Agendas",
          url: "/agenda",
          icon: <TfiAgenda />,
        },
        {
          title: "Fichas",
          url: "#",
          icon: <TiDocumentText />,
        },
      ]

  return (
    <Sidebar collapsible="icon" variant="floating">
        
        <SidebarHeader />
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild className="text-white text-base font-semibold">
                            <Link to={item.url}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
    </Sidebar>
  )
}
