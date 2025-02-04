import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTicket } from '../../services/tickets'
import { getServerComponentClient } from '../../supabaseClient'

import DeleteIcon from './DeleteIcon'
import Carousel from '../../../components/Carousel'

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const supabase = getServerComponentClient()

  const { data: ticket } = await supabase.from('tickets')
    .select()
    .eq('id', params.id)
    .single()

  return {
    title: `ComCom | ${ticket?.title || 'Ticket not Found'}`
  }
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)

  const supabase = getServerComponentClient()
  const { data } = await supabase.auth.getSession()

  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden flex-col items-center px-20 pt-6 pb-20 w-full bg-white max-md:px-5 max-md:pb-16 max-md:max-w-full">
        <div className="mt-0 mb-0 w-full max-w-[1250px] max-md:mt-6 max-md:mb-2.5 max-md:max-w-full">
          <main>
            <nav className="flex justify-between items-center pb-4 border-b-2 border-gray-200 my-10 mx-auto w-full">
              <h2 className="text-3xl font-bold text-stone-900">Commission Ticket Details</h2>
              <div className="ml-auto">
                {data.session.user.email === ticket.user_email && (
                  <DeleteIcon id={ticket.id} />
                )}
              </div>
            </nav>
            <div className="ticket-details-container">
              <div className="ticket-details-left">
              {Array.isArray(ticket.commission_pics.urls) && (
                <Carousel images={ticket.commission_pics.urls} />
              )}
              </div>
              <div className="ticket-details-right">
                <h3 className="text-3xl font-bold text-stone-900">{ticket.title}</h3>
                <small>ㅤ</small>
                <p className="text-lg font-medium text-stone-900 text-opacity-50">{ticket.body}</p>
                <p className="text-lg font-medium text-stone-900">Artist: <Link href={`/artists/${ticket.artist_id}`} className="text-primary underline">{ticket.artists.name}</Link></p>
                <p className="text-lg font-medium text-stone-900">Commission Details:</p>
                <ul className="list-disc list-inside">
                  <li className="text-lg font-medium text-stone-900">Price: RM{ticket.price}</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}