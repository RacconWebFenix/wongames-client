import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
