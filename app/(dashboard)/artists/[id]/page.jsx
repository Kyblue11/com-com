import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

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