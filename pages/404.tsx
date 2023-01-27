import {ReactElement} from 'react'
import type { NextPageWithLayout } from './_app'
import BlankLayout from '@/components/layouts/blank_layout'

const PageNotFound: NextPageWithLayout = () => {
    return <BlankLayout>404</BlankLayout>
  }

PageNotFound.getLayout = function getLayout(page: ReactElement) {
    return page
 }

export default PageNotFound
