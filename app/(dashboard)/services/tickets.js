import { getServerComponentClient } from '../supabaseClient'

export async function getTickets() {
  const supabase = getServerComponentClient()

  const { data, error } = await supabase.from('tickets')
    .select(`
      id,
      title,
      body,
      priority,
      commission_pic,
      artist_id,
      artists (
        name,
        profile_picture
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
      priority,
      commission_pic,
      artist_id,
      artists (
        name,
        profile_picture
      )
    `)
    .eq('id', id)
    .single()

  if (!data) {
    notFound()
  }

  return data
}