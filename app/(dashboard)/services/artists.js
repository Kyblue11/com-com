import { getServerComponentClient } from '../supabaseClient'

export async function getArtists() {
  const supabase = getServerComponentClient()

  const { data, error } = await supabase.from('artists')
    .select(`
      artist_id,
      name,
      profile_picture
    `)

  if (error) {
    console.log(error.message)
  }

  return data
}

export async function getArtist(id) {
  const supabase = getServerComponentClient()

  const { data: artist, error } = await supabase.from('artists')
    .select()
    .eq('artist_id', id)
    .single()

  if (error) {
    console.log(error.message)
    notFound()
  }

  return artist
}

export async function getArtistWorks(artistId) {
  const supabase = getServerComponentClient()

  const { data: works, error } = await supabase.from('tickets')
    .select(`
      id,
      title,
      body,
      artists (
        name,
        profile_picture
      ),
      commission_pics (
        urls
      )
    `)
    .eq('artist_id', artistId)

  if (error) {
    console.log(error.message)
  }

  return works
}