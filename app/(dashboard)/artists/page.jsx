import { Suspense } from 'react'
import Loading from '../../loading'

export default function ArtistPage({ params }) {
  return (
    <Suspense fallback={<Loading />}>
      <ArtistProfile params={params} />
    </Suspense>
  )
}