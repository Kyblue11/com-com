import { notFound } from 'next/navigation'
import { getArtist } from '../../services/artists'
import { getServerComponentClient } from '../../supabaseClient'

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const supabase = getServerComponentClient()

  const { data: artist } = await supabase.from('artists')
    .select()
    .eq('artist_id', params.id)
    .single()

  return {
    title: `ComCom | ${artist?.name || 'Artist not Found'}`
  }
}

export default async function ArtistProfile({ params }) {
  const artist = await getArtist(params.id)

  const supabase = getServerComponentClient()
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