import { ReactNode } from "react"
import SideBarMenu from "../menu/sidebar_menu";
import Box from "@mui/material/Box";

interface MainLayoutProps {
    children: ReactNode
}
export default function MainLayout(props : MainLayoutProps) {
  const {children} = props;
  return (
    <div style={{ display: 'flex' }}>
      <SideBarMenu/>
      <Box sx={{height: '100vh', overflow: 'auto', flexGrow: '1', width: 'calc(100% - 250px)'}}>
        {children}
      </Box> 
    </div>
  )
}
