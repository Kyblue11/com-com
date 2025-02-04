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

  const { data } = await supabase.from('artists')
    .select()
    .eq('artist_id', id)
    .single()

  if (!data) {
    notFound()
  }

  return data
}