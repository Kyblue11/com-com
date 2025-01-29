import { Suspense } from 'react'
import Loading from '../loading'
import ArtistProfile from './[id]/page'

export default function ArtistPage({ params }) {
  return (
    <Suspense fallback={<Loading />}>
      <ArtistProfile params={params} />
    </Suspense>
  )
}