import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies })

  const { data: artist } = await supabase.from('artists')
    .select()
    .eq('artist_id', params.id)
    .single()

  return {
    title: `ComCom | ${artist?.name || 'Artist not Found'}`
  }
}

async function getArtist(id) {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from('artists')
    .select()
    .eq('artist_id', id)
    .single()

  if (!data) {
    notFound()
  }

  return data
}

export default async function ArtistProfile({ params }) {
  const artist = await getArtist(params.id)

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <main>
      <h2>{artist.name}</h2>
      {artist.profile_picture && (
        <img src={artist.profile_picture} alt="Artist" className="artist-profile-pic" />
      )}
      <p>Gender: {artist.gender}</p>
      <p>Socials: {JSON.stringify(artist.socials)}</p>
    </main>
  )
}