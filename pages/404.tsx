import {ReactElement} from 'react'
import type { NextPageWithLayout } from './_app'
import BlankLayout from '@/components/layouts/blank_layout'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const PageNotFound: NextPageWithLayout = () => {
    return (
        <BlankLayout>
            <Box sx={{height:'100vh' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Typography component={'h1'} variant={'h3'}>404 | Page not found</Typography>
            </Box>
        </BlankLayout>
    )
  }

PageNotFound.getLayout = function getLayout(page: ReactElement) {
    return page
 }

export default PageNotFound
