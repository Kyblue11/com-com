import { Suspense } from 'react'
import Loading from '../loading'
import { getArtists } from '../services/artists'
import Link from 'next/link'

export const dynamicParams = true

export async function generateMetadata() {
  return {
    title: 'ComCom | Artists'
  }
}

export default async function Artists() {
  const artists = await getArtists()

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <h2 className="text-3xl font-bold text-stone-900">All Artists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {artists.map(artist => (
            <div key={artist.artist_id} className="card">
              <Link href={`/artists/${artist.artist_id}`}>
                <img src={artist.profile_picture} alt={artist.name} className="artist-profile-pic" />
                <h3 className="text-xl font-bold text-stone-900">{artist.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Suspense>
  )
}