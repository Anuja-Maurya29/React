import React from 'react'
import Header from './Header'
import { Suspense } from 'react'

const SuspenseExample = () => {
  return (
     <>
     <p>Suspense component example</p>
     <Suspense fallback={<div>hello i am suspense text</div>}>

<Header/>
     </Suspense>
     </>
  )
}

export default SuspenseExample