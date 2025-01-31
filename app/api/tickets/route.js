import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function POST(request) {
  const ticket = await request.json()

  // get supabase instance
  const supabase = createRouteHandlerClient({ cookies })

  // insert the data
  const { data, error } = await supabase.from('tickets')
    .insert(ticket)
    .select()
    .single()

  return NextResponse.json({ data, error })
}