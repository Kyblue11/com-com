import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTicket } from '../../services/tickets'
import { getServerComponentClient } from '../../supabaseClient'

import CarouselLarge from '../../../components/CarouselLarge'

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
            </nav>
            <div className="ticket-details-container">
              <div className="ticket-details-left">
              {Array.isArray(ticket.commission_pics.urls) && (
                <CarouselLarge images={ticket.commission_pics.urls} />
              )}
              </div>
              <div className="ticket-details-right">
                <h3 className="text-3xl font-bold text-stone-900">{ticket.title}</h3>
                <div className="flex items-center mt-2">
                  <Link href={`/artists/${ticket.artist_id}`} className="flex items-center text-primary underline">
                    <img
                      src={ticket.artists.profile_picture}
                      alt={`Profile picture of ${ticket.artists.name}`}
                      className="w-10 h-10 rounded-full object-cover mr-2"
                    />
                    <span className="text-lg font-medium text-stone-500">{ticket.artists.name}</span>
                  </Link>
                </div>
                <div className="mt-4"></div>
                <p className="text-lg font-medium text-stone-900 text-opacity-50">{ticket.body}</p>
                <p className="text-lg font-medium text-stone-900 mt-4">Commission Details:</p>
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