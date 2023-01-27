import { Box } from '@mui/material';
import {ReactNode} from 'react'

interface BlankLayoutProps {
  children: ReactNode
}

export default function BlankLayout(props: BlankLayoutProps) {
  const {children} = props;

  return (
    <Box component={'div'} sx={{height:'100vh'}}>{children}</Box>
  )
}
