import { getServerComponentClient } from '../supabaseClient'

export async function getTickets() {
  const supabase = getServerComponentClient()

  const { data, error } = await supabase.from('tickets')
    .select(`
      id,
      title,
      body,
      artist_id,
      artists (
        name,
        profile_picture
      ),
      commission_pics (
        urls
      )
    `)

  if (error) {
    console.log(error.message)
  }

  return data
}

export async function getTicket(id) {
  const supabase = getServerComponentClient()

  const { data } = await supabase.from('tickets')
    .select(`
      id,
      title,
      body,
      artist_id,
      price,
      artists (
        name,
        profile_picture
      ),
      commission_pics (
        urls
      )
    `)
    .eq('id', id)
    .single()

  if (!data) {
    notFound()
  }

  return data
}