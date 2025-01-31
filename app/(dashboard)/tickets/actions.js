"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function addTicket(formData) {
  const ticket = Object.fromEntries(formData)
  const commissionPics = ticket.commission_pics.split(',').map(url => url.trim())
  delete ticket.commission_pics

  const supabase = createServerActionClient({ cookies })

  // get current user session
  const { data: { session } } = await supabase.auth.getSession() // TODO: use for smth else

  // insert the data
  const { data: newTicket, error: ticketError } = await supabase.from('tickets')
    .insert(ticket)
    .select()
    .single()

  if (ticketError) {
    console.error('Supabase insert error:', ticketError)
    throw new Error('Could not add the new ticket.')
  }

  const { error: picsError } = await supabase.from('commission_pics')
    .insert({ ticket_id: newTicket.id, urls: commissionPics })

  if (picsError) {
    console.error('Supabase insert error:', picsError)
    throw new Error('Could not add the commission pictures.')
  }

  revalidatePath('/tickets')
  redirect('/tickets')
}

export async function deleteTicket(id) {
  const supabase = createServerActionClient({ cookies })

  const { error } = await supabase.from('tickets')
    .delete()
    .eq('id', id)
  
  if (error) {
    throw new Error('Could not delete the ticket.')
  }

  revalidatePath('/tickets')
  redirect('/tickets')
} 