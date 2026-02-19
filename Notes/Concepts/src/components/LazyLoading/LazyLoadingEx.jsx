import React from 'react'
import { Suspense,lazy } from 'react'

const LazyLoadingEx = () => {
const LazyComponent = lazy(()=> import('./LazyComponent'))
  return (
   <>
   <div>
    <p>lazy loading example</p>
    <Suspense fallback={<div>loading....</div>}>
<LazyComponent/>
    </Suspense>

   </div>
   </>
  )
}

export default LazyLoadingEx