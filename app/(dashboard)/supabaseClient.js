import { createServerComponentClient, createServerActionClient, createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export function getServerComponentClient() {
  return createServerComponentClient({ cookies })
}

export function getServerActionClient() {
  return createServerActionClient({ cookies })
}

export function getRouteHandlerClient() { // dont think needed
  return createRouteHandlerClient({ cookies })
}