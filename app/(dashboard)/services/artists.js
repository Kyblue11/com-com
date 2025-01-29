import { getServerComponentClient } from '../supabaseClient'

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