import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/login')
  }

  return (
    <>
      { data.session && <Navbar user={data.session.user} /> }
      {children}
      { data.session && <Footer /> }
    </>
  )
}